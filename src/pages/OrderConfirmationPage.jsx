import React from 'react';
const checkout={
    _id:"123456",
    createdAt: new Date(),
    checkoutItems:[
        {
            productId: "001",
            name: "T-Shirt",
            color: "Blue",
            size: "M",
            price: 19.99,
            quantity: 1,
            image: "https://picsum.photos/150?random=1",
        },
        {
            productId: "002",
            name: "Jeans",
            color: "Black",
            size: "L",
            price: 49.99,
            quantity: 2,
            image: "https://picsum.photos/150?random=2",
        },
    ],
    shippingAddress: {
        address: "123 Main St",
        city: "New York",
        country: "USA",
    },
}

const OrderConfirmationPage = () => {

    const calculatedestimatedDelivery = (createdAt) => {
        const orderDate = new Date(createdAt);
        orderDate.setDate(orderDate.getDate() + 10); // Add 10 days for estimated delivery
        return orderDate.toLocaleDateString(); // Return the estimated delivery date as a string
    }


    return (
        <div className='max-w-4xl mx-auto p-6 bg-white'>
            <h1 className='text-4xl font-bold mb-8 text-center text-emerald-700'>
                Thank you for your order!
            </h1>

            {checkout && (
                <div className='p-6 rounded-lg border'>
                    <div className='flex justify-between mb-6'>
                        {/* Order ID and Date */}
                        <div>
                            <h2 className='text-xl font-semibold'>Order ID: {checkout._id}</h2>
                            <p className='text-gray-600'>Date: {new Date(checkout.createdAt).toLocaleDateString()}</p>
                        </div>
                        {/* Estimated delivery */}
                        <div>
                            <p className='text-emerald-700 text-sm'>
                                Estimated delivery:{" "}
                                {calculatedestimatedDelivery(checkout.createdAt)}
                            </p>
                        </div>
                    </div>
                    
                    {/* Ordered items - moved outside previous div */}
                    <div className='mb-6'>
                        {checkout.checkoutItems.map((item) => (
                            <div key={item.productId} className='flex items-center mb-4'>
                                <img src={item.image} alt={item.name} className='w-16 h-16 object-cover rounded-md mr-4' />
                                <div>
                                    <h3 className='text-lg font-semibold'>{item.name}</h3>
                                    <p className='text-gray-600 text-sm'>Color: {item.color} | {item.size}</p>     
                                </div>
                                <div className='ml-auto text-right'>
                                    <p className='text-md'>Price: ${item.price.toFixed(2)}</p>
                                    <p className='text-sm text-gray-600'>Quantity: {item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/*Payment and delivery info*/}
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='p-4 rounded-lg'>
                            <h3 className='text-lg font-semibold mb-2'>Shipping Address</h3>
                            <p>{checkout.shippingAddress.address}</p>
                            <p>{checkout.shippingAddress.city}</p>
                            <p>{checkout.shippingAddress.country}</p>
                        </div>
                        <div className=' p-4 rounded-lg'>
                            <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
                            <p>Credit Card</p>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderConfirmationPage;