import "./style.css";

const Form = ({
	currencyIn,
	setCurrencyIn,
	amountIn,
	setAmountIn,
	currencyOut,
	setCurrencyOut,
	clearForm,
}) => {
	const onFormSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<form className="form" onSubmit={onFormSubmit}>
			<p>
				<label className="form__labelText">Waluta, którą posiadasz:</label>
				<select
					className="form__currency"
					value={currencyIn}
					onChange={({ target }) => setCurrencyIn(target.value)}>
					<option>PLN</option>
					<option>EUR</option>
					<option>GBP</option>
					<option>USD</option>
				</select>
			</p>
			<p>
				<label className="form__labelText">
					Kwota, którą chcesz przeliczyć:
				</label>
				<input
					className="form__input"
					type="number"
					placeholder="Podaj kwotę"
					step="0.01"
					value={amountIn}
					onChange={({ target }) => setAmountIn(target.value)}
				/>
			</p>
			<p className="form__errorText">Musisz podać kwotę</p>
			<p>
				<label className="form__labelText">
					Waluta, na którą chcesz przeliczyć:
				</label>
				<select
					className="form__currency"
					value={currencyOut}
					onChange={({ target }) => setCurrencyOut(target.value)}>
					<option>PLN</option>
					<option>EUR</option>
					<option>GBP</option>
					<option>USD</option>
				</select>
			</p>
			<button className="button button--count">Przelicz</button>
			<button className="button" onClick={clearForm}>
				Wyczyść
			</button>
		</form>
	);
};

export default Form;
