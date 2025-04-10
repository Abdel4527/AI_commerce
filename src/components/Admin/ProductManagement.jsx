import React from 'react';
import { Link } from 'react-router-dom';

const ProductManagement = () => {

    const products = [
        {
            _id: 1,
            name: "Product 1",
            price: 100,
            sku:"123123123",
        },
        {
            _id: 2,
            name: "Product 2",
            price: 200,
            sku:"123123124",
        },

    ];

    const handleDelete = (productId) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            // Call the delete API here
            console.log(`Product with ID ${productId} deleted`);

        }
    };

    return (
        <div className='max-w-7xl mx-auto p-6'>
            <h1 className='text-2xl font-bold mb-6'>Product Management</h1>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full text-left text-gray-500">
                    <thead className="bg-gray-100 text-xs text-color-gray-700 uppercase">
                        <tr>
                            <th className="px-4 py-3 ">Product Name</th>
                            <th className="px-4 py-3 ">Price</th>
                            <th className="px-4 py-3 ">SKU</th>
                            <th className="px-4 py-3 ">Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? products.map((product)=> (
                            <tr key={product._id} className="border-b border-gray-300 hover:bg-gray-50 cursor-pointer">
                                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">{product.name}</td>
                                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">${product.price}</td>
                                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">{product.sku}</td>
                                <td className='p-4 font-medium text-gray-900 whitespace-nowrap'>
                                    <Link to={`/admin/products/${product._id}/edit`} 
                                        className='bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600'
                                        
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={()=> handleDelete(product._id)}
                                        className='bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 ml-2'
                                    >

                                        Delete
                                    </button>

                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="4" className="text-center p-4">No products found</td>
                            </tr>

                        )}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductManagement;