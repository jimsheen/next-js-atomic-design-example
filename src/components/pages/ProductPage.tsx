import React from "react";
import ProductPageTemplate from "../templates/ProductPageTemplate";
import ProductGrid from "../organisms/ProductGrid";
import { createProducts } from "@/utils";

const initialProducts = createProducts(9);

const ProductPage = () => {
	return (
		<ProductPageTemplate
			sidebar={<div>Sidebar Content Here</div>}
			main={<ProductGrid initialProducts={initialProducts} />}
		/>
	);
};

export default ProductPage;
