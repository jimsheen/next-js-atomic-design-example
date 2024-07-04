"use client";

import { useState } from "react";
import ProductList from "../molecules/ProductList";
import SearchBar from "../molecules/SearchBar";
import { Product } from "@/types";

type ProductGridProps = {
	initialProducts: Product[];
};

const ProductGrid = ({ initialProducts }: ProductGridProps) => {
	const [searchText, setSearchText] = useState("");
	const [products, setProducts] = useState(initialProducts);

	const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSearchText(value);
	};

	const handleSearchClick = () => {
		const filteredProducts = initialProducts.filter((product) =>
			product.title.toLowerCase().includes(searchText.toLowerCase())
		);
		setProducts(filteredProducts);
	};

	const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSearchClick();
		}
		if (e.key === "Escape") {
			setSearchText("");
			setProducts(initialProducts);
		}
	};

	return (
		<div className="p-4">
			<div className="text-2xl font-bold">Products</div>
			<div className="my-4">
				<SearchBar
					searchText={searchText}
					onSearchTextChange={handleSearchTextChange}
					onSearchKeyPress={handleSearchKeyPress}
					onSearchClick={handleSearchClick}
				/>
			</div>
			<ProductList products={products} />
		</div>
	);
};

export default ProductGrid;
