import { RecipeList } from "../../models/recipe-list.interface";
import { SkillLevel } from "../../models/skill-level.enum";

const RECIPES_LIST_MOCK_DATA: RecipeList[] = [
  {
    recipeName: 'Cheesy Vegetarian Enchilada Casserole',
    readyIn: 35,
    averageRaiting: 2,
    skillLevel: SkillLevel.Easy,
    description: `Quick and easy cheesy enchilada casserole. Takes only 6 ingredients to make
    his popular one-pan amazing Mexican vegetarian dinner dish! Garnish with green onions and
    sour cream if desired.`
  }, {
    recipeName: 'Baked Chicken Schnitzel',
    readyIn: 30,
    averageRaiting: 5,
    skillLevel: SkillLevel.Intermediate,
    description: `Growing up, chicken schnitzel was a classic. I decided to make this dish oven-friendly
    using less oil, and an easier cleanup. This dish tastes great with potato salad, or mashed
    potatoes and a nice crisp salad. Tastes great the next day cold too! It's a family-favorite!.
    Enjoy with fresh squeezed lemon juice.`
  }, {
    recipeName: 'Grilled Cheese Sandwich',
    readyIn: 20,
    averageRaiting: 1,
    skillLevel: SkillLevel.Beginner,
    description: `Bread, butter and Cheddar cheese - here's a way to make this classic sandwich in
    a nonstick pan.`
  }, {
    recipeName: 'Chicken Cordon Bleu I',
    readyIn: 45,
    averageRaiting: 3,
    skillLevel: SkillLevel.Experienced,
    description: `This entree is easy and delicious! It's one of my husband's favorites! Try to use
    the largest chicken breasts you can find so you'll be able to roll them easier.`
  }, {
    recipeName: 'Bucatini All Amatriciana',
    readyIn: 39,
    averageRaiting: 2,
    skillLevel: SkillLevel.Easy,
    description: `This pasta dish is my signature dish. I really enjoy making this pasta, especially
    with the right ingredients like guanciale.`
  }, {
    recipeName: 'Best Lasagna',
    readyIn: 135,
    averageRaiting: 3,
    skillLevel: SkillLevel.Experienced,
    description: `It takes a little work, but it is worth it.`
  }, {
    recipeName: `Jan's Jalapeno Popper Pizza`,
    readyIn: 60,
    averageRaiting: 5,
    skillLevel: SkillLevel.Beginner,
    description: `All the goodness of jalapeno poppers in a pizza topping.`
  }, {
    recipeName: 'Creamy Chicken and Wild Rice Soup',
    readyIn: 25,
    averageRaiting: 4,
    skillLevel: SkillLevel.Intermediate,
    description: `A supremely filling, hearty soup. I serve this on cold rainy days with a loaf of
    homemade bread. Hint: this is perfect for leftover rotisserie chicken or chicken you've pulled
    from the bone after making homemade chicken stock! This soup makes great leftovers, but you might
    want to thin it slightly with skim milk or water when reheating.`
  }, {
    recipeName: 'Slow Cooker Mediterranean Lentil Stew',
    readyIn: 85,
    averageRaiting: 5,
    skillLevel: SkillLevel.Intermediate,
    description: `This is an excellent slow cooker recipe... Mix ingredients and let cook. Delicious!
    Spiced with cumin and coriander and flavored with tomato paste, this veggie-filled lentil stew
    will keep you warm for winter, and all year round! Good with a loaf of fresh-baked rustic bread!
    Vegetarian and vegan. Serve with a piece of bread for dipping.`
  }, {
    recipeName: 'Cream Cheese and Crab Sushi Rolls',
    readyIn: 105,
    averageRaiting: 3,
    skillLevel: SkillLevel.Easy,
    description: `Delicious and surprisingly simple to make. Sushi is expensive to buy at the
    supermarket, so making your own will save you tons of money. My husband is a sushi freak! I make
    this for him all the time.`
  },
];

/**
 * Data source for the DomainList view.
 */
export class DomainRecipeListConfiguration {
  static get DATASOURCE(): RecipeList[] {
    return RECIPES_LIST_MOCK_DATA;
  }
}
