// js/components/MainPage.jsx
import {useEffect, useState} from "react";

export default function MainPage() {
	const [recipes, setRecipes] = useState([]);
	
	useEffect(() => {
		try{
			fetch('/api/recipes', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecipes(json.data));
		}
		catch (error) {
			console.log(error);
		}
	}, []);

	const deleteRecipe = (event) => {
		event.preventDefault();
		const id = event.target.id;
		try {
			fetch(`/api/recipes?id=${id}`, {
				method: 'DELETE',
			})
				.then(response => response.json())
				.then(json => {
					setRecipes(recipes.filter(recipe => recipe._id !== id));
				});
		}
		catch (error) {
			console.log(error);
		}
	}
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="container px-6 py-10 mx-auto">
				<h1 className="w-[500px] mx-auto text-center text-6xl">Recipe ingredients app</h1>
				<p className="w-[1000px] mx-auto text-center mt-4 text-3xl">Search for ingredients to make great recipes!</p>
				<div><a href="/insert"><input value="Add recipe" type="submit"/></a></div>
				<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
					{recipes.map(recipe => (
						<div
							key={recipe._id}
							className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{recipe.name}
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								{recipe.quantity}
							</p>
							<div className={"flex justify-center mt-4"}>
								<button type="button"
								        id={recipe._id}
								        onClick={deleteRecipe}
								        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete
								</button>
							</div>
						</div>
					))}

				</div>
			</div>
		</section>
	)
}
