import React from 'react';
import Hero from '../components/Layout/Hero';
import GenderCollectionSection from '../components/Products/GenderCollectionSection';
import NewArrivals from '../components/Products/NewArrivals';
import ProductDetails from '../components/Products/ProductDetails';
import ProductGrid from '../components/Products/ProductGrid';
import FeaturedCollection from '../components/Products/FeaturedCollection';


const PlaceholderProducts = [
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

const Home = () => {
    return (
        <div>
            <Hero />
            <GenderCollectionSection />
            <NewArrivals />

            <h2 className="text-3xl text-center font-bold mb-4 mt-10">
                Best Seller
            </h2>
            <ProductDetails />
            <div className="container mx-auto">
                <h2 className="text-3xl text-center font-bold mb-4">
                    Top wears for women
                </h2>
                <ProductGrid products={PlaceholderProducts} />
            </div>

            <FeaturedCollection />
        </div>
    );
};

export default Home;