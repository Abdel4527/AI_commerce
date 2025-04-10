import React from 'react';

const OrderManagement = () => {

    const orders = [
        {
            _id:123456,
            user: {
                
                name: "John Doe",
            },
            totalPrice: 110,
            status:"Processing",
        },
    ];

    const handleStatusChange = (orderId, status) => {
        console.log({id: orderId, status});
        // Here you would typically make an API call to update the order status

    };

    return (
        <div className='max-w-7xl mx-auto p-6 '>
            <h2 className="text-2xl font-bold mb-6">
                Order Management

            </h2>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full text-left text-gray-500">
                    <thead className="bg-gray-50 text-sm uppercase text-gray-700">
                        <tr>
                            <th className='py-3 px-4'>Order ID</th>
                            <th className='py-3 px-4'>User</th>
                            <th className='py-3 px-4'>Total Price</th>
                            <th className='py-3 px-4'>Status</th>
                            <th className='py-3 px-4'>Actions</th>


                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order._id} className="border-b hover:bg-gray-50">
                                    <td className='py-3 px-4'>#{order._id}</td>
                                    <td className='py-3 px-4'>{order.user.name}</td>
                                    <td className='py-3 px-4'>${order.totalPrice}</td>
                                    <td className='py-3 px-4'>
                                        <select value={order.status}
                                            
                                            onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                                        >
                                            <option value="Processing">Processing</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Cancelled">Cancelled</option>
                                        </select>
                                    </td>
                                    <td className='py-3 px-4'>
                                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
                                            onClick={() => handleStatusChange(order._id, "Delivered")}
                                        >
                                        
                                        
                                            Mark as Delivered
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className='py-3 px-4 text-center'>No orders found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderManagement;