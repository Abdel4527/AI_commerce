import React from 'react';
import mensCollectionImage from '../../assets/mens-Collection.webp';
import womensCollectionImage from '../../assets/womens-Collection.webp';
import { Link } from 'react-router-dom';

const GenderCollectionSection = () => {
    return (
        <section className="py-16 px-4 lg:px-0">
            <div className="container mx-auto flex flex-col md:flex-row gap-8">
                {/* Women's Collection */}
                <div className="flex-1 relative">
                    <img src={womensCollectionImage} alt="Women's Collection" className="w-full h-[700px] object-cover" />
                    <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Women's Collection
                        </h2>
                    <Link to="/collections/all?gender=Women"className="text-sm text-gray-900 underline">
                        Shop Now
                        
                    </Link>
                    
                    
                    
                    </div>
                </div>
                
                {/* Men's Collection */}
                <div className="flex-1 relative">
                    <img src={mensCollectionImage} alt="Men's Collection" className="w-full h-[700px] object-cover" />
                    <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Men's Collection
                        </h2>
                    <Link to="/collections/all?gender=Men"className="text-sm text-gray-900 underline">
                        Shop Now
                    
                    </Link>
                    </div>
                </div>
            </div>
        </section>
    );};

export default GenderCollectionSection;