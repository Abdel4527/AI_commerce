import {IoMdClose} from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({drawerOpen, toggleCartDrawer}) => {

    const navigate= useNavigate();
    
    const handleCheckout = () => {
        toggleCartDrawer();
        navigate('/checkout');
    };

    return (
        <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="felx justify-end p-4">
                <button onClick={toggleCartDrawer}>
                    <IoMdClose className="h-6 w-6 text-gray-600"/>
                </button>

            </div>
            <div className="flex-grow overflow-auto ml-8 mr-8">
                <h2 className="text-2xl font-semibold mb-4 text-center">Your Cart</h2>
                {/* Cart Items */}
                <CartContents />

            </div>
            <div className="p-4 bg-white sticky bottom-0">
                
                <button onClick={handleCheckout} className="w-full py-2 bg-[#ea2e0e] text-white rounded-lg font-semibold hover:bg-orange-500 transition">Checkout</button>
                <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">shipping, taxes, and discounts codes calculated at checkout.</p>
            </div>       
        </div>
    );
};

export default CartDrawer;