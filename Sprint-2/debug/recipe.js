// Predict and explain first...
/* it will be:
bruschetta serves 2
  ingredients:
[object Object]
*/
// ${recipe} in the template string attempts to convert the recipe object into a string.
// In JavaScript, the object is converted into a string as ‘[object Object]’.
// Therefore, instead of a list of ingredients, we will see ‘[object Object]’.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join("\n")}`);
