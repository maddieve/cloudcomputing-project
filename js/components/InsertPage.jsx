// js/components/InsertPage.jsx
import { Box, Button, Container, Typography, TextField} from '@mui/material';
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
<section>
  <Box className="bg-white dark:bg-gray-900" py={10}>
    <Container maxWidth="md">
      <Typography variant="h3" align="center"  fontWeight="bold">Recipe finder app</Typography>
      <Box mt={2}>
        <Typography variant="subtitle1" align="center" mb={3}>
          Your new favorite cookbook.
        </Typography>
      </Box>
      <form>
        <Box mb={4} display="flex" flexDirection="column">
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Recipe name
          </Typography>
          <TextField
            id="name"
            variant="outlined"
            fullWidth
            size="small"
            placeholder="recipe name e.g Spaghetti Bolognese"
            required
          />
        </Box>
        <Box mb={4} display="flex" flexDirection="column">
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Recipe quantity
          </Typography>
          <TextField
            id="quantity"
            variant="outlined"
            fullWidth
            size="small"
            placeholder="number of servings"
            multiline
            rows={4}
            required
          />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={insertRecipe}
            sx={{ mr: 2 }}
          >
            Submit
          </Button>
          <Button href="/" variant="outlined">
            Go back
          </Button>
        </Box>
      </form>
    </Container>
  </Box>
</section>

	)
}