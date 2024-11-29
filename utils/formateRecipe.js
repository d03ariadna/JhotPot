import Ingredients from '@/data/Ingredients.json'

const formateRecipe = async (recipe) => {
    // Construir lista de ingredientes con nombres
    const formattedIngredients = recipe.ingredients
        .map((ingredient) => {
            const ingredientName = Ingredients[ingredient.ingredientId]?.name || "Unknown Ingredient";
            return ` ▫️ ${ingredient.quantity} ${ingredient.unit} - ${ingredientName}`;
        })
        .join('\n'); // Agregar salto de línea entre cada ingrediente

    // Formatear mensaje
    const message = `🍧 Look at this incredible recipe! 🍧\n\n` +
        `👩🏻‍🍳 Name: ${recipe.name}\n` +
        `🧇 Category: ${recipe.category}\n` +
        `⏰ Preparation Time: ${recipe.preparationTime} minutes\n` +
        `🔥 Calories: ${recipe.calories} kcal\n` +
        `👧🏻 Servings: ${recipe.servings} person(s)\n\n` +
        `📖 Description:\n${recipe.description}\n\n` +
        `🍃 Ingredients:\n${formattedIngredients}\n\n` +
        `📋 Steps:\n${recipe.steps.join('\n')}`;

    return message;
};

export default formateRecipe;