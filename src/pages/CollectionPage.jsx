import React, { useEffect, useRef, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import FilterSidebar from '../components/Products/FilterSidebar';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';


const CollectionPage = () => {

    const [products, setProducts] = useState([]);
    const sidebarRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleClickOutside = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const fetchedProducts = [
                {
                    id: 1,
                    name: "Product 1",
                    price: 49.99,
                    images: [{ url: "https://picsum.photos/500/500?random=1" }],
                },
                {
                    id: 2,
                    name: "Product 2",
                    price: 89.99,
                    images: [{ url: "https://picsum.photos/500/500?random=2" }],
                },
                {
                    id: 3,
                    name: "Product 3",
                    price: 69.99,
                    images: [{ url: "https://picsum.photos/500/500?random=3" }],
                },
                {
                    id: 4,
                    name: "Product 4",
                    price: 39.99,
                    images: [{ url: "https://picsum.photos/500/500?random=4" }],
                },
                {
                    id: 5,
                    name: "Product 5",
                    price: 59.99,
                    images: [{ url: "https://picsum.photos/500/500?random=5" }],
                },
                {
                    id: 6,
                    name: "Product 6",
                    price: 79.99,
                    images: [{ url: "https://picsum.photos/500/500?random=6" }],
                },
                {
                    id: 7,
                    name: "Product 7",
                    price: 99.99,
                    images: [{ url: "https://picsum.photos/500/500?random=7" }],
                },
                {
                    id: 8,
                    name: "Product 8",
                    price: 29.99,
                    images: [{ url: "https://picsum.photos/500/500?random=8" }],
                },
            ];
            setProducts(fetchedProducts);
        
        }, 1000);
    
    },[]);
    return (
        <div className='flex flex-col lg:flex-row'>
            <button onClick={toggleSidebar} className='lg:hidden border p-2 flex justify-center items-center'>
                <FaFilter className='mr-2'/> Filters
            </button>

            {/* Filter Section */}
            <div ref={sidebarRef} 
                className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                 fixed inset-y-0 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300
                 lg:static lg:translate-x-0`}
                
            >
                <FilterSidebar/> 
            </div>
            <div className='flex-grow p-4'>
                <h2 className='text-2xl uppercase font-bold mb-4'>All Collection</h2>

                {/*sort*/}
                <SortOptions/>
                <ProductGrid products={products}/>

            </div>
        </div>
    );
};

export default CollectionPage;