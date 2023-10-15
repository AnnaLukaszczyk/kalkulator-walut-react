import "./style.css";

const Result = ({ result }) => (
	<div className={`result${result ? " showResult" : ""}`}>
		<p className="result__converted">tu będzie wynik</p>
		<p className="result__info">Przeliczono po kursie z dnia 28.08.2023</p>
	</div>
);

export default Result;
