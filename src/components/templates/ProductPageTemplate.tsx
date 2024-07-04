import MainLayout from "./MainLayout";

type ProductPageTemplateProps = {
	sidebar: React.ReactNode;
	main: React.ReactNode;
};

const ProductPageTemplate = ({ sidebar, main }: ProductPageTemplateProps) => (
	<MainLayout>
		<div className="flex flex-col min-h-screen">
			<div className="min-h-screen flex">
				<aside className="bg-gray-100 p-4 lg:w-1/4 h-full">{sidebar}</aside>
				<main className="flex-1 p-4 h-full">{main}</main>
			</div>
		</div>
	</MainLayout>
);

export default ProductPageTemplate;
