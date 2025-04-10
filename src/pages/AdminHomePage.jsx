import React from 'react';
import { Link } from 'react-router-dom';

const AdminHomePage = () => {
    const orders = [
        {
            _id: 123424, // Changed to numeric value
            user: {
                name: "John Doe",
            },
            totalPrice: 200,
            status: "Processing",
        },
        {
            _id: 123425, // Changed to numeric value
            user: {
                name: "Jane Smith",
            },
            totalPrice: 150,
            status: "Shipped",
        },
        {
            _id: 123426, // Changed to numeric value
            user: {
                name: "Alice Johnson",
            },
            totalPrice: 300,
            status: "Delivered",
        },
        {
            _id: 123427, // Changed to numeric value
            user: {
                name: "Bob Brown",
            },
            totalPrice: 100,
            status: "Pending",
        },
    ];
    
    return (
        <div className='max-w-7xl mx-auto p-6'>
            <h1 className='text-3xl font-bold mb-6'>Admin Dashboard</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 shadow-md rounded-lg">
                    <h2 className='text-xl font-semibold mb-2'>Revenue</h2>
                    <p className='text-2xl font-bold'>$5000</p>
                </div>
                <div className="p-4 shadow-md rounded-lg">
                    <h2 className='text-xl font-semibold mb-2'>Orders</h2>
                    <p className='text-2xl font-bold'>200</p>
                    <Link to="/admin/orders" className='text-blue-500 hover:underline'>Manage Orders</Link>
                </div>
                <div className="p-4 shadow-md rounded-lg">
                    <h2 className='text-xl font-semibold mb-2'>Total Products</h2>
                    <p className='text-2xl font-bold'>100</p>
                    <Link to="/admin/products" className='text-blue-500 hover:underline'>Manage Products</Link>
                </div>
            </div>
            <div className="mt-6">
                <h2 className='text-2xl font-bold mb-4'>Recent Orders</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left border border-gray-200">
                        <thead className='bg-gray-100 text-sm uppercase text-gray-700'>
                            <tr>
                                <th scope="col" className="py-3 px-4">Order ID</th>
                                <th scope="col" className="py-3 px-4">Customer</th>
                                <th scope="col" className="py-3 px-4">Total Price</th>
                                <th scope="col" className="py-3 px-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 ? (
                                orders.map((order) => (
                                    <tr key={order._id} className="border-b border-gray-300 hover:bg-gray-50 cursor-pointer">
                                        <td className="p-4">{order._id}</td>
                                        <td className="p-4">{order.user.name}</td>
                                        <td className="p-4">${order.totalPrice}</td>
                                        <td className="p-4">
                                            <span
                                                className={`px-2 py-1 rounded text-sm ${
                                                    order.status === 'Delivered'
                                                        ? 'bg-green-100 text-green-700'
                                                        : order.status === 'Shipped'
                                                        ? 'bg-blue-100 text-blue-700'
                                                        : order.status === 'Processing'
                                                        ? 'bg-yellow-100 text-yellow-700'
                                                        : 'bg-gray-100 text-gray-700'
                                                }`}
                                            >
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="text-center p-4 text-gray-500">No recent orders</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminHomePage;