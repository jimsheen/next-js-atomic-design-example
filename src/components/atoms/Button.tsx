type ButtonProps = {
	label: string;
	onClick: () => void;
	type?: "button" | "submit" | "reset";
};

const Button = ({ label, onClick, type = "button" }: ButtonProps) => (
	<button
		type={type}
		onClick={onClick}
		className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
		{label}
	</button>
);

export default Button;
