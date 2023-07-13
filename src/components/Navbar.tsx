import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getTotalItemsInCart } from "../slices/CartSlice";

function Navbar() {
    const total = useSelector(getTotalItemsInCart);
    return (
        <div className="sticky top-0 flex justify-between items-center bg-white drop-shadow p-5">
            <nav className="flex justify-between text-lg w-40 md:w-55 lg:w-60 xl:w-64">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/store"}>Store</NavLink>
                <NavLink to={"/about"}>About</NavLink>
            </nav>
            <div>
                <button className="text-3xl w-10 text-sky-400 relative w-12 h-12 ">
                    <AiOutlineShoppingCart />
                    <div className="absolute rounded-full bg-red-500 text-white w-6 h-6 text-base right-0 bottom-0">
                        {total}
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
