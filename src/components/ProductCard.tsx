import { useSelector } from "react-redux";
import { MoneyFormatter } from "../util/MoneyFormatter";
import { getItemQuantity } from "../slices/CartSlice";
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
        return (
            <div className="rounded shadow mt-2" key={item.id}>
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
                    {quantity === 1 ? (
                        <button className="w-full h-10 bg-cyan-400 text-white text-lg rounded">
                            + Add to Cart
                        </button>
                    ) : (
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex items-center">
                                <button className="px-2 py-1 bg-cyan-400 rounded text-white">+</button>
                                <h1 className="mx-3">{quantity} in cart</h1>
                                <button className="px-2 py-1 bg-cyan-400 rounded text-white">-</button>
                            </div>
                            <button>bye</button>
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
