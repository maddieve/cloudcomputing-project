// js/components/InsertPage.jsx
export default function InsertPage() {

    const insertRecipe = (event) => {
		event.preventDefault();
		const name = document.getElementById("name").value;
		const quantity = document.getElementById("quantity").value;
		const data = {name, quantity};
		fetch("/api/recipes", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(() => {
			console.log("New recipe inserted");
			document.getElementById("name").value = "";
			document.getElementById("quantity").value = "";
		});
	}

	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="container px-6 py-10 mx-auto">
				<h1 className="w-[500px] mx-auto text-center text-6xl">Recipe finder app</h1>
				<p className="w-[1000px] mx-auto text-center mt-4 text-3xl">Your new favorite cookbook.</p>
				<form>
					<div className="mb-6">
						<label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipe name</label>
						<input type="text" id="name"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="ingredient" required/>
					</div>
					<div className="mb-6">
						<label htmlFor="quantity"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipe quantity</label>
						<textarea id="quantity"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       required/>
					</div>
					<button type="submit"
					        onClick={ insertRecipe }
					        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
					</button>
                    <a href="/"><input value="Go back" type="submit"/></a>
				</form>
			</div>
		</section>
	)
}