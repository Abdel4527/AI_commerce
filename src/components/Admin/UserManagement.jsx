import React from 'react';
import { useState } from 'react';

const UserManagement = () => {

    const users =[
        {
            _id: 1,
            
            name: "John Doe",
            email: "john@example.com",
            role: "admin"
        },
        {
            _id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            role: "customer"
        },
    ];

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        password: "",
        role: "customer",

    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value, });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User added:", formData);
        setFormData({
            name: "",
            email: "",
            password: "",
            role: "customer",

        });
    };

    const handleRoleChange = (userId, newRole) => {
        console.log(`User ID: ${userId}, New Role: ${newRole}`);
        // Update user role logic here
    }

    const handleDeleteUser = (userId) => {
        if(window.confirm("Are you sure you want to delete this user?")) {
            console.log(`User with ID ${userId} deleted.`);
            // Delete user logic here
        }
    }


    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">User Management</h2>
            <div className="p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full p-2 border border-gray-300 rounded'
                            required
                            
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='w-full p-2 border border-gray-300 rounded'
                            required
                            
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className='w-full p-2 border border-gray-300 rounded'
                            required
                            
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Role</label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className='w-full p-2 border border-gray-300 rounded'
                            
                        >
                            <option value="admin">Admin</option>
                            <option value="customer">Customer</option>
                        </select>
                    </div>
                    <button type="submit" className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700'>Add User</button>

                </form>
               
            </div>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className='bg-gray-100 text-gray-700'>
                        <tr>
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-4 text-left">Email</th>
                            <th className="py-3 px-4 text-left">Role</th>
                            <th className="py-3 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="py-3 px-4">{user.name}</td>
                                <td className="py-3 px-4">
                                    <select
                                        className="border border-gray-300 rounded p-2"
                                        value={user.role}
                                        onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                    
                                    >
                                        
                                        <option value="admin">Admin</option>
                                        <option value="customer">Customer</option>
                                    </select>
                                </td>
                                <td className="py-3 px-4">{user.email}</td>
                                <td className="py-3 px-4">
                                    <button 
                                        onClick={() => handleDeleteUser(user._id)}
                                        className='bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700'
                                    >
                                        Delete
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default UserManagement;