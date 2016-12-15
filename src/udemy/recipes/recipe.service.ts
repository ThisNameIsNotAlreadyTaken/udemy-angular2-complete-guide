import { Recipe } from './recipe';
import { Ingredient } from "../ingredients/ingredient";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Very tasty', 'http://www.coopzeitung.ch/site/presse/displayImageThumbService/1613009/600x400/Wiener_Schnitzel.jpg', [
            new Ingredient("French Fries", 2),
            new Ingredient("Pork Meat", 1)
        ]),
        new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
    ];

    getRecipes() {
        return this.recipes;
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    deleteRecipe(recipe: Recipe) {
        this.recipes.splice(this.recipes.indexOf(recipe), 1)
    }
}