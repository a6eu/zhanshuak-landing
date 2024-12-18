import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {auth} from '@/firebase/setup';
import firebase from 'firebase/compat/app';

export const sendCode = createAsyncThunk(
    'auth/sendCode',
    async (phoneNumber: string, { rejectWithValue }) => {
        try {
            const verify = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
                size: 'invisible',
                callback: () => console.log('Recaptcha Verified'),
            });

            const confirmationResult = await auth.signInWithPhoneNumber(phoneNumber, verify);
            return confirmationResult.verificationId;
        } catch (error) {
            console.error('Error during SMS sending:', error);
            return rejectWithValue('unknown error');
        }
    }
);

export const verifyOtp = createAsyncThunk(
    'auth/verifyOtp',
    async ({ verificationId, otp }: { verificationId: string; otp: string }, { rejectWithValue }) => {
        try {
            const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
            return await auth.signInWithCredential(credential);
        } catch (error) {
            console.error('Error verifying OTP:', error);
            return rejectWithValue('unknown error');
        }
    }
);

interface AuthState {
    number: string;
    isSms: boolean;
    otp: string;
    verificationId: string | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    number: '',
    isSms: false,
    otp: '',
    verificationId: null,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setNumber: (state, action) => {
            state.number = action.payload;
        },
        setOtp: (state, action) => {
            state.otp = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendCode.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(sendCode.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSms = true;
                state.verificationId = action.payload;
            })
            .addCase(sendCode.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
            .addCase(verifyOtp.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(verifyOtp.fulfilled, (state) => {
                state.isLoading = false;
                state.isSms = false;
                state.verificationId = null;
            })
            .addCase(verifyOtp.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { setNumber, setOtp } = authSlice.actions;
export default authSlice.reducer;
