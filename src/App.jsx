import React, { useEffect } from "react";

function App() {
	const [data, setData] = React.useState([]);

	const [randomQuote, setRandomQuote] = React.useState(1);

	const newQuoteRequest = () => {
		const result = Math.floor(Math.random() * 100);
		setRandomQuote(result);
	};

	useEffect(() => {
		fetch("https://type.fit/api/quotes")
			.then((res) => res.json())
			.then((json) => {
				setData(json);
			});
	}, []);

	return (
		<main>
			<h1>Quote Generator</h1>
			<section>
				<button onClick={newQuoteRequest}>New Quote</button>
				<h3>
					<span>"{data[randomQuote].text}"</span>
				</h3>
				<i>-{data[randomQuote].author}</i>
			</section>
		</main>
	);
}

export default App;
