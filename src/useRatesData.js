import axios from "axios";
import { useState, useEffect } from "react";
import { JSON_URL } from "./URL.js"


export const useRatesData = () => {
	const [ratesData, setRatesData] = useState({ status: "loading", data: null });

	useEffect(() => {
		setTimeout(() => {
		(async () => {
			try {
				const response = await axios.get(JSON_URL);

				setRatesData({
					status: "success",
					data: response.data,
				});
			} catch (error) {
				setRatesData({ status: "error" });
			}
		})();
		}, 2000);
	}, []);

	return { ratesData };
};