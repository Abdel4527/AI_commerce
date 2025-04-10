import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PayPalButton from './PayPalButton';



const cart ={
    products:[
        {
            name:"Product 1",
            size:"M",
            color:"Red",
            price: 49.99,
            image: "https://picsum.photos/150?random=1",
        },
        
        {
            name: "Product 2",
            size: "L",
            color: "Blue",
            price: 59.99,
            image: "https://picsum.photos/150?random=2",
        },
    ],
    totalPrice: 109.98,
};

const Checkout = () => {

    const navigate = useNavigate(); 
    const [checkoutId, setCheckoutId] = useState(null);
    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone: "",
    });


    const handleCreateCheckout = (e) => {
        e.preventDefault();
        setCheckoutId(123); // Simulate checkout ID creation
    };

    const handlePaymentSuccess = (details) => {
        console.log("Payment successful!", details);
        navigate("/order-confirmation");

    };

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 tracking-tighter'>
            {/* Left Side: Cart Items */}
            <div className='bg-white rounded-lg p-6'>
                <h2 className='text-2xl uppercase font-semibold mb-4'>checkout</h2>
                <form onSubmit={handleCreateCheckout}>
                    <h3 className='text-lg mb-4'>Contact details</h3>
                    <div className='mb-4'>
                        <label className='block text-gray-700 mb-2'>Email</label>
                        <input 
                            type='email'
                            value="User@example.com" 
                            className='w-full border border-gray-300 rounded-md p-2'
                            disabled 
                            required 
                        />
                    </div>
                    <h3 className='text-lg mb-4'>Delivery</h3>
                    <div className='mb-4 grid grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-gray-700 mb-2'>First Name</label>
                            <input 
                                type='text' 
                                value={shippingAddress.firstName} 
                                onChange={(e) => setShippingAddress({...shippingAddress, firstName: e.target.value})}
                                className='w-full border border-gray-300 rounded-md p-2'
                                required 
                            />

                        </div>

                        <div>
                            <label className='block text-gray-700 mb-2'>Last Name</label>
                            <input 
                                type='text' 
                                value={shippingAddress.lastName} 
                                onChange={(e) => setShippingAddress({...shippingAddress, lastName: e.target.value})}
                                className='w-full border border-gray-300 rounded-md p-2'
                                required 
                            />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 mb-2'>Address</label>
                        <input 
                            type='text' 
                            value={shippingAddress.address} 
                            onChange={(e) => setShippingAddress({...shippingAddress, address: e.target.value})}
                            className='w-full border border-gray-300 rounded-md p-2'
                            required 
                        />
                    </div>
                    <div className='mb-4 grid grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-gray-700 mb-2'>City</label>
                            <input 
                                type='text' 
                                value={shippingAddress.city} 
                                onChange={(e) => setShippingAddress({...shippingAddress, city: e.target.value})}
                                className='w-full border border-gray-300 rounded-md p-2'
                                required 
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700 mb-2'>Postal Code</label>
                            <input 
                                type='text' 
                                value={shippingAddress.postalCode} 
                                onChange={(e) => setShippingAddress({...shippingAddress, postalCode: e.target.value})}
                                className='w-full border border-gray-300 rounded-md p-2'
                                required 
                            />
                        </div>
                    </div>
                    
                    <div className='mb-4'>
                        <label className='block text-gray-700 mb-2'>Country</label>
                        <input 
                            type='text' 
                            value={shippingAddress.country} 
                            onChange={(e) => setShippingAddress({...shippingAddress, country: e.target.value})}
                            className='w-full border border-gray-300 rounded-md p-2'
                            required 
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 mb-2'>Phone</label>
                        <input 
                            type='tel' 
                            value={shippingAddress.phone} 
                            onChange={(e) => setShippingAddress({...shippingAddress, phone: e.target.value})}
                            className='w-full border border-gray-300 rounded-md p-2'
                            required 
                        />
                    </div>
                    <div className='mt-6'>
                        {!checkoutId ? (

                            <button type= "submit" className='w-full bg-black text-white py-3 rounded'>Continue to payment</button>
                        ) : (
                            <div>
                                <h3 className='text-lg mb-4'>Pay with Paypal</h3>
                                {/*paypal comp*/}
                                <PayPalButton amount={100} onSuccess={handlePaymentSuccess} onError={(err) => alert("Payment failed. Try again.")}/>
                            </div>
                            
                        )}
                    
                        
                        
                    </div>
                </form>
            </div>
            {/* Right Side: Cart Summary */}
            <div className='bg-gray-50 rounded-lg p-6'>
                <h3 className='text-lg uppercase font-semibold mb-4'>Order summary</h3>
                <div className='border-t py-4 mb-4'>
                    {cart.products.map((product, index) => (
                        <div key={index} className='flex items-start justify-between py-2 border-b'>
                            <div className='flex items-start'>
                                <img src={product.image} alt={product.name} className='w-20 h-24 object-cover mr-4' />
                                <div>
                                    <h4 className='text-md font-semibold'>{product.name}</h4>
                                    <p className='text-sm text-gray-600'>Size: {product.size}</p>
                                    <p className='text-sm text-gray-600'>Color: {product.color}</p>
                                </div>
                               

                            </div>
                            <p className='text-lg '>${product.price.toLocaleString()}</p>

                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-between text-lg mb-4'>
                    <p>Subtotal</p>
                    <p>${cart.totalPrice?.toLocaleString()}</p>

                </div>
                <div className='flex items-center justify-between text-lg'>
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <div className='flex items-center justify-between text-lg font-semibold mt-4'>
                    <p>Total</p>
                    <p>${cart.totalPrice?.toLocaleString()}</p>
                </div>
            </div>
                    
            
        </div>
    );
};

export default Checkout;