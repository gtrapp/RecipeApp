const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};


///////////////////////////////////////

const showRecipe = async function() {
  try { //fetch returns a response object
    //const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
    const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604691c37cdc054bd0bc');
    
    const data = await res.json();

    if(!res.ok) throw new Error(`${data.message} (${res.status})`); // create your own Error message if a bad response is thrown. 
    // data.message - targets the Error message sent by API
    // res.status = the status code sent 400 (Bad Request)

    console.log(res, data);

    //Deconstruct the remote JSON object and rename labels because we don't like the underscores.
    let {recipe} = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    }
    console.log(recipe);

  } catch(err) {
    alert(err); //creates the pop-up window from line 23 if there is an error
  } 
};

showRecipe();

 

