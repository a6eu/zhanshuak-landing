"use client"
import {FC, JSX} from "react"
import {
    Avatar,
    FilledTextFieldProps,
    OutlinedTextFieldProps,
    StandardTextFieldProps,
    TextField,
    TextFieldVariants
} from "@mui/material"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {DatePicker} from "@mui/lab";

const Profile: FC = () => {
    return (
        <div className="w-3/4 bg-white mt-14 dark:bg-dashboardDark flex flex-col space-y-5">
            <h1 className="text-4xl">Profile</h1>
            <Avatar
                className="size-[80px] text-3xl bg-amber-500"
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
            >
                NO
            </Avatar>
            <TextField className="w-1/3" id="outlined-basic" label="First name" variant="outlined"/>
            <TextField className="w-1/3" id="outlined-basic" label="Last name" variant="outlined"/>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                </RadioGroup>
            </FormControl>
            <DatePicker
                mask="mm"
                value={new Date()}
                onChange={console.log}
                renderInput={(props: JSX.IntrinsicAttributes & { variant?: TextFieldVariants | undefined; } & Omit<FilledTextFieldProps | OutlinedTextFieldProps | StandardTextFieldProps, "variant">) => (
                    <TextField {...props} helperText="invalid mask" />
                )}
            />
        </div>
    )
}

export default Profile