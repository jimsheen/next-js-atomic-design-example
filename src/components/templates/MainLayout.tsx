const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<header className="bg-gray-800 text-white p-4">
				<div>Header Content Here</div>
			</header>
			{children}
		</>
	);
};

export default MainLayout;
