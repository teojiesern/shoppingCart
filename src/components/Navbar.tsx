import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="flex justify-between items-center bg-white drop-shadow p-5">
            <nav className="flex justify-between w-1/6 text-lg ">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/store"}>Store</NavLink>
                <NavLink to={"/about"}>About</NavLink>
            </nav>
            <div>
                <button className="text-3xl w-10 text-sky-400 relative w-12 h-12 ">
                    <AiOutlineShoppingCart />
                    <div className="absolute rounded-full bg-red-500 text-white w-6 h-6 text-base right-0 bottom-0">
                        0
                    </div>
                </button>
                <div></div>
            </div>
        </div>
    );
}

export default Navbar;
