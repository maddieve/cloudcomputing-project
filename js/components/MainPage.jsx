// js/components/MainPage.jsx
import {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Card, CardContent, Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/500.css';


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
		
<section>
  <Box mt={2} display="flex" flexDirection="column" alignItems="center" textAlign="center">
    <div>
      <Typography variant="h3">Recipe finder app</Typography>
      <Box mt={2}>
        <p>Search for ingredients to make great recipes!</p>
        <Box mb={2}>
          <Button href="/insert" variant="contained">
            Add recipe
          </Button>
        </Box>
      </Box>
	  <Box display="flex" mb={4} alignItems="center" justifyContent="center" mt={2}>
        <img src="/bibimbap.png" alt="Food Icon" width={48} height={48} />
     	 </Box>
      <Box display="flex" justifyContent="center">
      <Grid container spacing={2} justifyContent="center">
        {recipes.map((recipe) => (
          <Grid item key={recipe._id}>
            <Card sx={{ width: 300, height: 'auto', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant="h5">{recipe.name}</Typography>
                <Typography variant="body1" sx={{ flex: '1 1 auto' }}>{recipe.quantity}</Typography>
                <div>
                  <Button variant="outlined" size="small" id={recipe._id} onClick={deleteRecipe}>
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Box>
    </div>
  </Box>
</section>
		
	)
}
