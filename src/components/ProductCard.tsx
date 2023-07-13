import { useDispatch, useSelector } from "react-redux";
import { MoneyFormatter } from "../util/MoneyFormatter";
import {
    decreaseCartQuantity,
    getItemQuantity,
    increaseCartQuantity,
    removeFromCart,
} from "../slices/CartSlice";
import { RootState } from "../store";

interface IProps {
    items: {
        id: number;
        name: string;
        price: number;
        imgUrl: string;
    }[];
}

const ProductCard: React.FC<IProps> = (props) => {
    const renderProducts = props.items.map((item) => {
        const quantity = useSelector((state: RootState) =>
            getItemQuantity(state, item.id)
        );
        const dispatch = useDispatch();

        const handleIncreaseQuantity = () => {
            dispatch(increaseCartQuantity(item.id));
        };

        const handleDecreaseQuantity = () => {
            dispatch(decreaseCartQuantity(item.id));
        };

        const handleRemove = () => {
            dispatch(removeFromCart(item.id));
        };

        return (
            <div className="rounded shadow mb-4" key={item.id}>
                <div>
                    <img
                        src={item.imgUrl}
                        style={{
                            objectFit: "cover",
                            height: "200px",
                            width: "100%",
                        }}
                    ></img>
                </div>
                <div className="p-3">
                    <div className="flex justify-between items-center mb-3">
                        <h1 className="text-xl font-semibold">{item.name}</h1>
                        <h1 className="text-gray-500 ml-2 font-semibold">
                            {MoneyFormatter(item.price)}
                        </h1>
                    </div>
                    {quantity === 0 ? (
                        <button
                            className="w-full h-10 bg-cyan-400 text-white text-lg rounded"
                            onClick={handleIncreaseQuantity}
                        >
                            + Add to Cart
                        </button>
                    ) : (
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex items-center">
                                <button
                                    className="px-2 py-1 bg-cyan-400 rounded text-white"
                                    onClick={handleIncreaseQuantity}
                                >
                                    +
                                </button>
                                <h1 className="mx-3">{quantity} in cart</h1>
                                <button
                                    className="px-2 py-1 bg-cyan-400 rounded text-white"
                                    onClick={handleDecreaseQuantity}
                                >
                                    -
                                </button>
                            </div>
                            <button
                                className="bg-red-600 text-white px-5 py-2 mt-2 rounded"
                                onClick={handleRemove}
                            >
                                Remove
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    });

    return (
        <div className="xl:columns-4 lg:columns-3 md:columns-2 sm:columns-1">
            {renderProducts}
        </div>
    );
};

export default ProductCard;
