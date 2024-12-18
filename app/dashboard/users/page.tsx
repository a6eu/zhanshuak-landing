'use client';
import React, {useEffect, useState} from 'react';
import {addDoc, collection, doc, getDocs, updateDoc} from '@firebase/firestore';
import {db} from '@/firebase/setup';
import DashboardHeader from "@/components/dashboard/DahsboardHeader";

interface User {
    id: string;
    firstName: string;
    lastName: string;
    diagnosis: string;
    medications: string[];
    email: string;
}

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [newDiagnosis, setNewDiagnosis] = useState('');
    const [newMedications, setNewMedications] = useState<string[]>([]);
    const [medicationInput, setMedicationInput] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    async function fetchUsers() {
        const usersCollection = collection(db, 'users');
        const snapshot = await getDocs(usersCollection);
        const fetchedUsers = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...(doc.data() as User),
        }));
        setUsers(fetchedUsers);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleUserSelect = (user: User) => {
        setSelectedUser(user);
        setNewDiagnosis(user.diagnosis);
        if (user.medications) {
            setNewMedications(user.medications);
        }
    };

    const handleDiagnosisChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewDiagnosis(event.target.value);
    };

    const handleMedicationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMedicationInput(event.target.value);
    };

    const handleAddMedication = () => {
        if (medicationInput.trim()) {
            setNewMedications((prev) => [...prev, medicationInput.trim()]);
            setMedicationInput('');
        }
    };

    const handleUpdateUser = async () => {
        if (selectedUser) {
            const userRef = doc(db, 'users', selectedUser.id);
            await updateDoc(userRef, {
                diagnosis: newDiagnosis,
                medications: newMedications,
            });
            setSelectedUser(null);
            setNewDiagnosis('');
            setNewMedications([]);
            setMedicationInput('');
            alert('User updated successfully!');
        }
    };

    const handleAddUser = async () => {
        await addDoc(collection(db, 'users'), {
            firstName: 'New',
            lastName: 'User',
            diagnosis: '',
            medications: [],
        });
        alert('New user added');
        fetchUsers();
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = users.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
    });

    return (
        <>
            <DashboardHeader />
            <div className="p-5 pl-32">
                <h1 className="text-2xl mb-4">Users and Diagnoses</h1>

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search Users..."
                        className="border p-2 w-1/3"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>

                <button
                    className="mb-4 p-2 bg-blue-500 text-white rounded"
                    onClick={handleAddUser}
                >
                    Add New User
                </button>

                <div className="overflow-x-auto">
                    <table className="bg-white min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                        <tr>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Diagnosis</th>
                            <th className="border p-2">Medications</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user.id} className="border-b">
                                <td className="p-2">{user.firstName} {user.lastName}</td>
                                <td className="p-2">{user.diagnosis}</td>
                                <td className="p-2">
                                    {user.medications ? user.medications.join(', ') : "Nothing yet"}
                                </td>
                                <td className="p-2">
                                    <button
                                        className="text-blue-500"
                                        onClick={() => handleUserSelect(user)}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {selectedUser && (
                    <div className="mt-6 p-4 bg-white border border-gray-300 rounded">
                        <h2 className="text-xl mb-4">Edit User: {selectedUser.firstName} {selectedUser.lastName}</h2>

                        <div className="mb-4">
                            <label className="block text-gray-700">Diagnosis:</label>
                            <input
                                type="text"
                                className="border p-2 w-full"
                                value={newDiagnosis}
                                onChange={handleDiagnosisChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Medications:</label>
                            <div className="flex gap-2 items-center">
                                <input
                                    type="text"
                                    className="border p-2 w-3/4"
                                    value={medicationInput}
                                    onChange={handleMedicationChange}
                                />
                                <button
                                    className="bg-blue-500 text-white p-2"
                                    onClick={handleAddMedication}
                                >
                                    Add
                                </button>
                            </div>
                            <div className="mt-2">
                                {newMedications.join(', ')}
                            </div>
                        </div>

                        <button
                            className="bg-green-500 text-white p-2 rounded"
                            onClick={handleUpdateUser}
                        >
                            Save Changes
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default UsersPage;
