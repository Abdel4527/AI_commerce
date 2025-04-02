import React from 'react';
import { RiDeleteBin3Line } from 'react-icons/ri';

const CartContents = () => {

    const cartProducts = [
        {
            id: 1,
            name: "Product 1",
            size: "M",
            color: "black",
            price: 100,
            image: "https://picsum.photos/200?random=1",
            qty: 1,
        },
        {
            id: 2,
            name: "Product 2",
            size: "L",
            color: "white",
            price: 200,
            image: "https://picsum.photos/200?random=2",
            qty: 2,
        },
        {
            id: 3,
            name: "Product 3",
            size: "S",
            color: "blue",
            price: 300,
            image: "https://picsum.photos/200?random=3",
            qty: 3,
        },
    ];
    return (

        <div>
            {cartProducts.map((product, index) => (
                <div 
                    key={index} 
                    className="flex items-start justify-between border-b border-gray-100 py-4"
                >
                    <div className="flex items-start">
                           <img src={product.image} 
                            alt={product.name} 
                            className="w-20 h-24 object-cover mr-4 rounded" 
                        />
                        <div>
                            <h3>
                                {product.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                size: {product.size} | color: {product.color}
                            </p>
                            <div className="mt-2 flex items-center space-x-2">
                                <button className="border rounded px-2 py-1 text-xl font-medium">-</button>
                                <span className="mx-4">{product.qty}</span>
                                <button className="border rounded px-2 py-1 text-xl font-medium">+</button>

                            </div>
                        </div>  
                    
                    </div> 
                    <div>
                        <p className="text-xl font-semibold mr-3">${product.price.toLocaleString()}</p>
                        <button> 
                            <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />

                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartContents;