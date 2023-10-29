import "./style.css";
import currencies from "../currencies";
import { StyledForm, Paragraph, ParagraphWithOtherDimensions, Label } from "./styled"

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
	clearError,
	hideResult,
	isError,
}) => {
	const onFormSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<StyledForm onSubmit={onFormSubmit}>
			<Paragraph>
				<Label>Waluta, którą posiadasz:</Label>
				<select
					className="form__currency"
					value={currencyIn}
					onChange={({ target }) => setCurrencyIn(target.value)}
					onClick={hideResult}>
					{currencies.map((currency) => (
						<option key={currency.name} value={currency.name}>
							{currency.name}
						</option>
					))}
				</select>
			</Paragraph>
			<ParagraphWithOtherDimensions>
				<Label>
					Kwota, którą chcesz przeliczyć:
				</Label>
				<input
					className={`form__input${isError ? " errorColor" : ""}`}
					type="number"
					placeholder="Podaj kwotę"
					step="0.01"
					value={amountIn}
					onChange={({ target }) => setAmountIn(target.value)}
					onMouseOver={clearError}
					onClick={hideResult}
				/>
			</ParagraphWithOtherDimensions>
			<Paragraph>
				<span className={`form__errorText${errorInfo ? " error" : ""}`}>
					{errorInfo}
				</span>
			</Paragraph>
			<Paragraph>
				<Label>
					Waluta, na którą chcesz przeliczyć:
				</Label>
				<select
					className="form__currency"
					value={currencyOut}
					onChange={({ target }) => setCurrencyOut(target.value)}
					onClick={hideResult}>
					{currencies.map((currency) => (
						<option key={currency.name} value={currency.name}>
							{currency.name}
						</option>
					))}
				</select>
			</Paragraph>
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
		</StyledForm>
	);
};

export default Form;
