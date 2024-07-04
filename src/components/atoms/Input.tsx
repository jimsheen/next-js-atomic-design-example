type InputProps = {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	placeholder?: string;
};

const Input = ({ value, onChange, onKeyDown, placeholder }: InputProps) => (
	<input
		className="border border-gray-300 rounded p-2 w-full"
		value={value}
		onChange={onChange}
		onKeyDown={onKeyDown}
		placeholder={placeholder}
	/>
);

export default Input;
