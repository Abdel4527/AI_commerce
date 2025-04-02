import React from 'react';
import { RiTwitterXLine } from 'react-icons/ri';
import { TbBrandInstagram, TbBrandMeta, TbBrandLinkedin } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="border-t py-8">
            <div className="container mx-auto px-4 lg:px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Company</h3>
                        <p className="text-sm text-gray-500 mb-2">Be first to hear about new products, exclusive events, and online offers.</p>
                        <p className="text-sm text-gray-500 mb-2">Sign up and get 10% off your first order.</p>
                        <form className="flex flex-col md:flex-row items-center mb-4">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 mb-2 md:mb-0 md:mr-2"
                            />
                            <button 
                                type="submit" 
                                className="w-full md:w-auto bg-red-700 text-white py-2 px-4 rounded-md hover:bg-orange-400"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Shop</h3>
                        <ul className="space-y-1 text-gray-500">
                            <li>
                                <Link to="#" className="hover:text-gray-500 transition-colors">Men's top wear</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-gray-500 transition-colors">Women's top wear</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-gray-500 transition-colors">Men's bottom wear</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-gray-500 transition-colors">Women's bottom wear</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Support</h3>
                        <ul className="space-y-1 text-gray-500">
                            <li>
                                <Link to="#" className="hover:text-gray-500 transition-colors">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-gray-500 transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-gray-500 transition-colors">FAQs</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-gray-500 transition-colors">Features</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Follow Us</h3>
                        <div className="flex space-x-4 mb-4">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors">
                                <TbBrandMeta className="w-5 h-5"/>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors">
                                <RiTwitterXLine className="w-5 h-5"/>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors">
                                <TbBrandInstagram className="w-5 h-5"/>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors">
                                <TbBrandLinkedin className="w-5 h-5"/>
                            </a>
                        </div>
                        <p className="text-gray-500">Call Us</p>
                        <p>
                            <FiPhoneCall className="inline-block mr-2"/>
                            0123-233-222
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
                <p className="text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;