import ProductCard from "../components/ProductCard";
import StoreItems from "../data/items.json";

export default function Store() {
    return (
        <div className="p-2">
            <h1 className="text-4xl my-5">Store</h1>
            <ProductCard items={StoreItems} />
        </div>
    );
}
