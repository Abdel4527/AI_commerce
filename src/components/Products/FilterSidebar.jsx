import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FilterSidebar = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const [filter, setFilter] = useState({
        category: "",
        gender: "",
        color: "",
        size: [],
        material: [],
        brand: [],
        minPrice: 0,
        maxPrice: 100,
    });

    const [priceRange, setPriceRange] = useState([0, 100]);

    const categories = ["Top wear", "Bottom Wear"];
    const colors = ["Red", "Green", "Blue", "Yellow", "Black", "White", "Pink", "Purple", "Orange", "Brown"];
    const sizes = ["S", "M", "L", "XL", "XXL"];
    const materials = ["Cotton", "Polyester", "Nylon", "Silk", "Wool"];
    const brands = ["Nike", "Adidas", "Puma", "Reebok", "Under Armour"];
    const genders = ["Men", "Women"];

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);
        setFilter({
            category: params.category || "",
            gender: params.gender || "",
            color: params.color || "",
            size: params.size ? params.size.split(",") : [],
            material: params.material ? params.material.split(",") : [],
            brand: params.brand ? params.brand.split(",") : [],
            minPrice: params.minPrice || 0,
            maxPrice: params.maxPrice || 100,
        });
        setPriceRange([0, params.maxPrice || 100]);
    }, [searchParams]);

    const handleFilterChange = (e) => {
        const { name, value, checked, type } = e.target;
        let newFilters = { ...filter };

        if (type === "checkbox") {
            if (checked) {
                newFilters[name] = [...newFilters[name] || [], value];
            } else {
                newFilters[name] = newFilters[name].filter((item) => item !== value);
            }
        } else {
            newFilters[name] = value;
        }

        setFilter(newFilters);
        updateURLParams(newFilters);
        console.log(newFilters);
    };

    const updateURLParams = (newFilters) => {
        const params = new URLSearchParams();
        Object.keys(newFilters).forEach((key) => {
            if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
                params.set(key, newFilters[key].join(","));
            } else if (newFilters[key]) {
                params.set(key, newFilters[key]);
            }
        });
        setSearchParams(params);
        navigate(`?${params.toString()}`);
    };

    const handlePriceChange = (e) => {
        const newPrice = e.target.value;
        setPriceRange([0, newPrice]);
        const newFilters = { ...filter, minPrice: 0, maxPrice: newPrice };
        setFilter(newFilters);
        updateURLParams(newFilters);
    };

    return (
        <div className='p-4'>
            <h3 className='text-xl font-medium text-gray-800 mb-4'>Filter</h3>

            <div className='mb-6'>
                <label className='block text-gray-700 font-medium mb-4'>Category</label>
                {categories.map((category) => (
                    <div key={category} className='flex items-center mb-1'>
                        <input
                            type='radio'
                            name='category'
                            value={category}
                            onChange={handleFilterChange}
                            checked={filter.category === category}
                            className='mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
                        />
                        <span className='text-gray-700'>{category}</span>
                    </div>
                ))}
            </div>

            <div className='mb-6'>
                <label className='block text-gray-700 font-medium mb-4'>Gender</label>
                {genders.map((gender) => (
                    <div key={gender} className='flex items-center mb-1'>
                        <input
                            type='radio'
                            name='gender'
                            value={gender}
                            onChange={handleFilterChange}
                            checked={filter.gender === gender}
                            className='mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
                        />
                        <span className='text-gray-700'>{gender}</span>
                    </div>
                ))}
            </div>

            <div className='mb-6'>
                <label className='block text-gray-700 font-medium mb-2'>Color</label>
                <div className='flex flex-wrap gap-2'>
                    {colors.map((color) => (
                        <button 
                            key={color}
                            name="color"
                            value={color}
                            onClick={handleFilterChange}
                            className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${filter.color === color ? 'ring-2 ring-blue-500' : ''}`}
                            style={{ backgroundColor: color.toLowerCase() }}
                        />
                    ))}
                </div>
            </div>

            <div className='mb-6'>
                <label className='block text-gray-700 font-medium mb-4'>Size</label>
                {sizes.map((size) => (
                    <div key={size} className='flex items-center mb-1'>
                        <input
                            type='checkbox'
                            name='size'
                            value={size}
                            onChange={handleFilterChange}
                            checked={filter.size.includes(size)}
                            className='mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500'
                        />
                        <span className='text-gray-700'>{size}</span>
                    </div>
                ))}
            </div>

            <div className='mb-6'>
                <label className='block text-gray-700 font-medium mb-4'>Material</label>
                {materials.map((material) => (
                    <div key={material} className='flex items-center mb-1'>
                        <input
                            type='checkbox'
                            name='material'
                            value={material}
                            onChange={handleFilterChange}
                            checked={filter.material.includes(material)}
                            className='mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500'
                        />
                        <span className='text-gray-700'>{material}</span>
                    </div>
                ))}
            </div>

            <div className='mb-6'>
                <label className='block text-gray-700 font-medium mb-4'>Brand</label>
                {brands.map((brand) => (
                    <div key={brand} className='flex items-center mb-1'>
                        <input
                            type='checkbox'
                            name='brand'
                            value={brand}
                            onChange={handleFilterChange}
                            checked={filter.brand.includes(brand)}
                            className='mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500'
                        />
                        <span className='text-gray-700'>{brand}</span>
                    </div>
                ))}
            </div>

            <div className='mb-6'>
                <label className='block text-gray-700 font-medium mb-4'>Price Range</label>
                <input
                    type='range'
                    min={0}
                    max={100}
                    name='priceRange'
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    className='w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer'
                />
                <div className='flex justify-between text-gray-700 mt-2'>
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>

        </div>
    );
};

export default FilterSidebar;
