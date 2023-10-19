import "./style.css";
import currencies from "../currencies";

const Form = ({
	currencyIn,
	setCurrencyIn,
	amountIn,
	setAmountIn,
	currencyOut,
	setCurrencyOut,
	clearForm,
	errorInfo,
	count,
	errorColor,
	clearError,
	hideResult
}) => {
	const onFormSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<form className="form" onSubmit={onFormSubmit}>
			<p className="form__paragraph">
				<label className="form__labelText">Waluta, którą posiadasz:</label>
				<select
					className="form__currency"
					value={currencyIn}
					onChange={({ target }) => setCurrencyIn(target.value)}
					onClick={hideResult}>
					{currencies.map((currency => (
						<option
						key={currency.name}
						value={currency.name}
						>
						{currency.name}
						</option>
					)))}
				</select>
			</p>
			<p className="form__paragraph form__paragraph--dimensions">
				<label className="form__labelText">
					Kwota, którą chcesz przeliczyć:
				</label>
				<input
					className={`form__input${errorColor ? " errorColor" : ""}`}
					type="number"
					placeholder="Podaj kwotę"
					step="0.01"
					value={amountIn}
					onChange={({ target }) => setAmountIn(target.value)}
					onMouseOver={clearError}
					onClick={hideResult}
				/>
			</p>
			<p className="form__paragraph">
				<span className={`form__errorText${errorInfo ? " error" : ""}`}>
					{errorInfo}
				</span>
			</p>
			<p className="form__paragraph">
				<label className="form__labelText">
					Waluta, na którą chcesz przeliczyć:
				</label>
				<select
					className="form__currency"
					value={currencyOut}
					onChange={({ target }) => setCurrencyOut(target.value)}
					onClick={hideResult}>
						{currencies.map((currency => (
						<option
						key={currency.name}
						value={currency.name}
						>
						{currency.name}
						</option>
					)))}
				</select>
			</p>
			<div className="buttons">
				<button
					className="buttons__button buttons__button--count"
					onClick={count}>
					Przelicz
				</button>
				<button className="buttons__button" onClick={clearForm}>
					Wyczyść
				</button>
			</div>
		</form>
	);
};

export default Form;
