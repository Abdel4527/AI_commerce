import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

const OrderDetailsPage = () => {
    const { id } = useParams(); // Extract the order ID from the URL parameters
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        const mockOrderDetails = {
            _id: id,
            createdAt: new Date(),
            isPaid: true,
            isDelivered: false,
            paymentMethod: "PayPal",
            shippingMethod: "Standard Shipping",
            shippingAddress: {
                city: "New York",
                country: "USA",
            },
            orderItems: [
                {
                    productId: "1",
                    name: "Product 1",
                    quantity: 2,
                    price: 29.99,
                    image: "https://picsum.photos/150?random=1",
                },
                {
                    productId: "2",
                    name: "Product 2",
                    quantity: 1,
                    price: 49.99,
                    image: "https://picsum.photos/150?random=2",
                },
            ],
        };
        setOrderDetails(mockOrderDetails);
    }, [id]);
    
    return (
        <div className='max-w-7xl mx-auto p-4 sm:p-6'>
            <h2 className='text-2xl md:text-3xl font-bold mb-6'>Order Details</h2>
            
            {!orderDetails ? (
                <p>No orders found</p>
            ) : (
                <div className='p-4 sm:p-6 rounded-lg border'>
                    <div className='flex flex-col sm:flex-row justify-between mb-8'>
                        <div>
                            <h3 className='text-xl md:text-2xl font-semibold'>
                                Order ID: #{orderDetails._id}    
                            </h3>
                            <p className='text-gray-600'>
                                {new Date(orderDetails.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                        <div className='flex flex-col items-start sm:items-end mt-4 sm:mt:0'>
                            <span 
                                className={`text-sm font-semibold ${orderDetails.isPaid ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}
                                px-3 py-1 rounded-full text-sm font-medium mb-2`}
                                
                            >
                                {orderDetails.isPaid ? 'Approved' : 'Pending'}
                            

                            </span>
                            <span 
                                className={`text-sm font-semibold ${orderDetails.isDelivered ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}
                                px-3 py-1 rounded-full text-sm font-medium`}
                            >
                                {orderDetails.isDelivered ? 'Delivered' : 'Pending Delivery'}
                            </span>
                        </div>
                    </div>
                    {/*customer details*/}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8'>
                        <div>
                            <h4 className='text-lg font-semibold mb-2'> Payment Info</h4>
                            <p>Payment Method: {orderDetails.paymentMethod}</p>
                            <p>Status: {orderDetails.isPaid ? 'Paid' : 'Not Paid'}</p>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold mb-2'>Shipping Info</h4>
                            <p>Shipping Method: {orderDetails.shippingMethod}</p>
                            <p>Address: {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.country}</p>
                        </div>
                    </div>
                    {/*ordered items*/}
                    <div className='overflow-x-auto'>
                        <h4 className='text-lg font-semibold mb-4'>Products</h4>
                        <table className='min-w-full bg-white border border-gray-300'>
                            <thead>
                                <tr className='bg-gray-100'>
                                    <th className='px-4 py-2 '>Name</th>
                                    <th className='px-4 py-2 '>Unit Price</th>
                                    <th className='px-4 py-2 '>Quantity</th>
                                    <th className='px-4 py-2 '>Total</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {orderDetails.orderItems.map((item) => (
                                    <tr key={item.productId} className='border-b'>
                                        <td className='px-4 py-2 flex items-center'>
                                            <img src={item.image} alt={item.name} className='w-16 h-16 object-cover rounded-md mr-4' />
                                            <Link
                                                to={`/product/${item.productId}`}
                                                className='text-blue-600 hover:underline'
                                            >
                                                {item.name}
                                            </Link>

                                        </td>
                                        <td className='px-4 py-2'>${item.price.toFixed(2)}</td>
                                        <td className='px-4 py-2'>{item.quantity}</td>
                                        <td className='px-4 py-2'>${(item.price * item.quantity).toFixed(2)}</td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                            
                        </table>
                        

                    </div>
                    <Link to="/my-orders" className='mt-6 inline-block text-blue-600 hover:underline'>
                        Back to My Orders
                    </Link>
                </div>
            )}
        </div>
    );
};

export default OrderDetailsPage;