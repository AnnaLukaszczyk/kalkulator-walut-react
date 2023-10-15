import { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";

function App() {
	const [currencyIn, setCurrencyIn] = useState("PLN");
	const [amountIn, setAmountIn] = useState("");
	const [currencyOut, setCurrencyOut] = useState("EUR");
	const [errorInfo, setErrorInfo] = useState("");
	const [errorColor, setErrorColor] = useState(false);
	const [result, setResult] = useState(false);

	const clearForm = () => {
		setCurrencyIn("PLN");
		setAmountIn("");
		setCurrencyOut("EUR");
		setErrorInfo("");
		setErrorColor("");
		setResult("");
	};

	const clearError = () => {
		if (amountIn <= 0) {
			setErrorInfo("");
			setErrorColor(false);
			setAmountIn("");
		}
		return;
	};

	const count = () => {
		if (amountIn === "") {
			setErrorInfo("Musisz podać kwotę");
			setErrorColor(true);
		} else if (amountIn <= 0) {
			setErrorInfo("Podaj kwotę dodatnią!");
			setErrorColor(true);
		} else {
			setResult(true);
		}
	};

	return (
		<>
			<Header />

			<Container>
				<Form
					currencyIn={currencyIn}
					setCurrencyIn={setCurrencyIn}
					amountIn={amountIn}
					setAmountIn={setAmountIn}
					currencyOut={currencyOut}
					setCurrencyOut={setCurrencyOut}
					clearForm={clearForm}
					errorInfo={errorInfo}
					count={count}
					errorColor={errorColor}
					clearError={clearError}
				/>
				<Result 
					result={result}
				/>
			</Container>
		</>
	);
}

export default App;
