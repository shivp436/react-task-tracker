import Button from "./Button";

const Header = ({onAdd} ) => {
    const onAdd2 = () => {
        console.log('Click')
    }

	return (
		<header className="header">
			<h1>Task Tracker</h1>
            <Button color="green" text="Add" onClick={onAdd2} />
		</header>
	);
};

export default Header;
