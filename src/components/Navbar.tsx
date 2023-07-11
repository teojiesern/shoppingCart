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
            <button className="text-3xl w-10 text-sky-400">
                <AiOutlineShoppingCart />
            </button>
        </div>
    );
}

export default Navbar;
