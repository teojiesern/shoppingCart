import { MoneyFormatter } from "../util/MoneyFormatter";

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
        return (
            <div className="rounded shadow" key={item.id}>
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
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-semibold">{item.name}</h1>
                        <h1 className="text-gray-500 ml-2 font-semibold">
                            {MoneyFormatter(item.price)}
                        </h1>
                    </div>
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
