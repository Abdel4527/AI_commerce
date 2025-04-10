import React from 'react';
import { useState } from 'react';

const EditProductPage = () => {

    const [productData, setProductData] = useState({

        name: "",
        description: "",
        price: 0,
        countInStock: 0,
        sku: "",
        category: "",
        brand: "",
        sizes: [],
        colors: [],
        collections: "",
        material: "",
        gender:"",
        images: [
            {
                url:"https://picsum.photos/150?random=1",
            },
            {
                url:"https://picsum.photos/150?random=2",
            },
            
        ],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        console.log(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Product Data:", productData);
    };
    
    return (
        <div className='max-w-5xl mx-auto p-6 shadow-md rounded-md'>
            <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Product Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={productData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={productData.description}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleChange}
                        rows={4}
                        required
                    ></textarea>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Price
                    </label>
                    <input
                        type="number"
                        name="price"
                        placeholder="enter price"
                        value={productData.price}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                {/*countInStock*/}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Count In Stock
                    </label>
                    <input
                        type="number"
                        name="countInStock"
                        placeholder="enter count in stock"
                        value={productData.countInStock}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        SKU
                    </label>
                    <input
                        type="text"
                        name="sku"
                        value={productData.sku}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                {/*sizes*/}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Sizes (comma-separated)
                    </label>
                    <input
                        type="text"
                        name="sizes"
                        value={productData.sizes.join(", ")}
                        onChange={(e) => {
                            setProductData({
                                ...productData,
                                sizes: e.target.value
                                    .split(",")
                                    .map((size) => size.trim())
                                    .filter((size) => size), // Remove empty values
                            });
                        }}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                {/*colors*/}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Colors (comma-separated)
                    </label>
                    <input
                        type="text"
                        name="colors"
                        value={productData.colors.join(", ")}
                        onChange={(e) => {
                            setProductData({
                                ...productData,
                                colors: e.target.value.split(",").map((color) => color.trim()).filter((color) => color), // Remove empty values
                            });
                        }}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                {/*image upload*/}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Upload Image
                    </label>
                    <input
                        type="file"
                        onChange={handleImageUpload}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <div className="flex gap-4 mt-4">
                        {productData.images.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image.url}
                                    alt={image.altText || "Product Image"}
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Update Product
                </button>
                    
                
            </form>
        </div>
    );
};

export default EditProductPage;