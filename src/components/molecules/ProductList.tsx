import { Product } from "@/types";
import ProductCard from "../molecules/ProductCard";

type ProductListProps = {
	products: Product[];
};

const ProductList = ({ products }: ProductListProps) => (
	<>
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{products?.length > 0 &&
				products.map((product) => (
					<ProductCard
						key={product.id}
						title={product.title}
						price={product.price}
						imageSrc={product.imageSrc}
						imageAlt={product.imageAlt}
					/>
				))}
		</div>
		{products?.length === 0 && (
			<div className="text-center text-gray-500 my-4">No products found</div>
		)}
	</>
);

export default ProductList;
