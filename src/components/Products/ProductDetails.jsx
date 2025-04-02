import React, { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'sonner';

const selectedProduct = {
    name: "Stylish Jacket",
    price: 79.99,
    originalPrice: 99.99,
    description: "A stylish jacket perfect for all seasons.",
    brand: "Fashion Co.",
    material: "Cotton Blend",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue"],
    images:[
        {
            url:"https://picsum.photos/500/500?random=1",
            altText:"Stylish Jacket 1"
        },
        {
            url:"https://picsum.photos/500/500?random=2",
            altText:"Stylish Jacket 2"
        },

    ],
};

const ProductDetails = () => {

    const [mainImage, setMainImage]=useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0].url);
        }
    }, [selectedProduct]);

    const handleQuantityChange = (action) => {
        if (action === "plus") setQuantity((prev) => prev + 1);
        if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
        
       
    };

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error("Please select size and color before adding to cart.", {
                duration: 1000,

            });
            return
            
        }
        setIsButtonDisabled(true);
        setTimeout(() => {
            
            toast.success("Added to cart successfully!", {
                duration: 1000,
            });
            setIsButtonDisabled(false);
        }, 500);
        
    };

    return (
        <div className="p-6">
            <div className="max-w-6xl mx-auto bg-white rounded-lg p-6">
                <div className="flex flex-col md:flex-row">
                    {/* left thumbnail */}
                    <div className="hidden md:flex flex-col space-y-4 mr-6">
                        {selectedProduct.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={image.altText}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                                onClick={() => setMainImage(image.url)} // Set main image on click
                            />
                        ))}
                    </div>
                    {/* main image */}
                    <div className="md:w1/2">
                        <div className='mb-4'>
                            <img src={mainImage} alt="Main Product"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </div>
                    {/*mobile thumbnail */}
                    <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
                        {selectedProduct.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={image.altText}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                                onClick={() => setMainImage(image.url)} // Set main image on click
                            />
                        ))}
                    </div>
                    {/*right side */}
                    <div className="md:w-1/2 md:ml-10">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-2">{selectedProduct.name}</h1>
                        <p className="text-lg text-gray-600 mb-1 line-through">
                            {selectedProduct.originalPrice && `$${selectedProduct.originalPrice}`}
                        </p>
                        <p className='text-xl text-gray-900 mb-2'>
                            ${selectedProduct.price}
                        </p>
                        <p className="text-gray-700 mb-4 text-xl">{selectedProduct.description}</p>
                        <div className='mb-4'>
                            <p className='text-gray-700'>Color: </p>
                            <div className='flex gap-2 mt-2'>
                                {selectedProduct.colors.map((color) => (
                                    <button 
                                        key={color} 
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-8 h-8 rounded-full border ${selectedColor === color ? "border-black border-4" : "border-gray-300"}`}
                                        style={{ 
                                            backgroundColor: color.toLowerCase(), 
                                            filter: "brightness(0.5)"
                                        }}
                                    >
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='mb-4'>
                            <p className='text-gray-700'>Size: </p>
                            <div className='flex gap-2 mt-2'>
                                {selectedProduct.sizes.map((size) => (
                                    <button 
                                        key={size} 
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 rounded border ${selectedSize === size ? "bg-black text-white" : ""}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='mb-6'>
                            <p className='text-gray-700'>Quantity: </p>
                            <div className='flex items-center space-x-4 mt-2'>
                                <button 
                                    className='px-2 py-1 bg-gray-200 rounded text-lg'
                                    onClick={() => handleQuantityChange("minus")}
                                >
                                    -
                                </button>
                                <span className='text-lg'>{quantity}</span>
                                <button 
                                    className='px-2 py-1 bg-gray-200 rounded text-lg'
                                    onClick={() => handleQuantityChange("plus")}
                                >
                                    +
                                </button>
                            </div>
                        </div> 
                        <button 
                            
                            onClick={handleAddToCart}
                            disabled={isButtonDisabled}
                            className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isButtonDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}`}
                        >
                            {isButtonDisabled ? "Adding..." : "Add to Cart"}
                        </button>   

                        <div className='mt-10 text-gray-700'>
                            <h3 className='text-xl font-bold mb-4'>Characteristics: </h3>
                            <table className='w-full text-left text-sm text-gray-600'>
                                <tbody>
                                    <tr>
                                        <td className='py-2 font-semibold'>Brand:</td>
                                        <td className='py-2'>{selectedProduct.brand}</td>
                                    </tr>
                                    <tr>
                                        <td className='py-2 font-semibold'>Material:</td>
                                        <td className='py-2'>{selectedProduct.material}</td>
                                    </tr>
                                    {/* Add more characteristics as needed */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;