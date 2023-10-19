import { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import currencies from "./currencies";

function App() {
	const [currencyIn, setCurrencyIn] = useState("PLN");
	const [amountIn, setAmountIn] = useState("");
	const [currencyOut, setCurrencyOut] = useState("EUR");
	const [errorInfo, setErrorInfo] = useState("");
	const [errorColor, setErrorColor] = useState(false);
	const [result, setResult] = useState(false);
	const [amountOut, setAmountOut] = useState("");

	const clearForm = () => {
		setCurrencyIn("PLN");
		setAmountIn("");
		setCurrencyOut("EUR");
		setErrorInfo("");
		setErrorColor("");
		setResult("");
	};

	const clearError = () => {
		if (amountIn > 0) {
			return;
		}
		setErrorInfo("");
		setErrorColor(false);
		setAmountIn("");
	};

	const rateCurrencyIn = currencies.find(
		({ name }) => name === currencyIn
	).rate;

	const rateCurrencyOut = currencies.find(
		({ name }) => name === currencyOut
	).rate;

	const count = () => {
		if (amountIn === "") {
			setErrorInfo("Musisz podać kwotę");
			setErrorColor(true);
		} else if (amountIn <= 0) {
			setErrorInfo("Podaj kwotę dodatnią!");
			setErrorColor(true);
		} else {
			setResult(true);
			setAmountOut((+amountIn * rateCurrencyIn) / rateCurrencyOut);
		}
	};

	const hideResult = () => {
		if (result) {
			setResult(false);
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
					hideResult={hideResult}
				/>
				<Result
					result={result}
					amountIn={amountIn}
					currencyIn={currencyIn}
					amountOut={amountOut}
					currencyOut={currencyOut}
				/>
			</Container>
		</>
	);
}

export default App;
