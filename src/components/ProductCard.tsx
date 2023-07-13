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
            <div className="rounded" key={item.id}>
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
                <div>hi</div>
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
