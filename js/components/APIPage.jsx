// js/components/APIPage.jsx
import {useEffect, useState} from "react";
import axios from 'axios';

export default function MainPage() {

    const [recipeAPI, setRecipeAPI] = useState([]);
	useEffect(() => {
		fetchRecipes();
	}, []);

    async function fetchRecipes(){
        try {
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&beta=false&diet=balanced&app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}&diet=balanced`);
            setRecipeAPI(response.data);
        } catch (error) {
            console.log("error: " + error);
        }
    }
    useEffect(() => {
		recipeInfo();
	}, [recipeAPI]);

    function recipeInfo(){
        
    }

	return (
        <div>
           
        </div>
	)
}