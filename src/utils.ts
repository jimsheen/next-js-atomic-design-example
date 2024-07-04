import { faker } from "@faker-js/faker";
import { Product } from "./types";

export const createProduct = (): Product => ({
	id: faker.string.uuid(),
	title: faker.commerce.productName(),
	price: faker.commerce.price(),
	imageSrc: "https://picsum.photos/300/300",
	imageAlt: faker.lorem.sentence(),
});

export const createProducts = (count: number) =>
	Array.from({ length: count }, createProduct);
