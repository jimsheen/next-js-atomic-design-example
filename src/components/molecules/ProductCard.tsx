"use client";

import Image from "next/image";

type ProductCardProps = {
	title: string;
	price: string;
	imageSrc: string;
	imageAlt: string;
};

const ProductCard = ({
	title,
	price,
	imageSrc,
	imageAlt,
}: ProductCardProps) => (
	<div className="border border-gray-400 rounded p-4 shadow-sm">
		<Image src={imageSrc} alt={imageAlt} width={300} height={300} />
		<h1 className="text-lg font-semibold mt-2">{title}</h1>
		<p className="text-gray-600">{price}</p>
	</div>
);

export default ProductCard;
