import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";

function App() {
	return (
		<>
			<Header />

			<Container>
				<Form />
				<Result />
			</Container>
		</>
	);
}

export default App;
