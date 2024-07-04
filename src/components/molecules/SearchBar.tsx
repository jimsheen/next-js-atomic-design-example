import Input from "../atoms/Input";
import Button from "../atoms/Button";

type SearchBarProps = {
	searchText: string;
	onSearchTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSearchKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	onSearchClick: () => void;
};

const SearchBar = ({
	searchText,
	onSearchTextChange,
	onSearchClick,
	onSearchKeyPress,
}: SearchBarProps) => (
	<div className="flex space-x-2">
		<Input
			value={searchText}
			onChange={onSearchTextChange}
			onKeyDown={onSearchKeyPress}
			placeholder="Search..."
		/>
		<Button label="Search" onClick={onSearchClick} />
	</div>
);

export default SearchBar;
