import { RecipeEditViewModel } from "../../models/recipe-edit-view-model.interface";
import { SkillLevel } from "../../models/skill-level.enum";

const RECIPES_LIST_MOCK_DATA: RecipeEditViewModel[] = [
  {
    id: '69abd4abf577d7cfd6d370f146611fea',
    name: 'Cheesy Vegetarian Enchilada Casserole',
    imagePath: '',
    readyIn: 35,
    averageRaiting: 2,
    skillLevel: SkillLevel.Easy,
    description: `Quick and easy cheesy enchilada casserole. Takes only 6 ingredients to make
    his popular one-pan amazing Mexican vegetarian dinner dish! Garnish with green onions and
    sour cream if desired.`,
    method: '',
    ingredients: ''
  }, {
    id: '7dc3119280f9c8311e874e78b8dade6e',
    name: 'Baked Chicken Schnitzel',
    imagePath: '',
    readyIn: 30,
    averageRaiting: 5,
    skillLevel: SkillLevel.Intermediate,
    description: `Growing up, chicken schnitzel was a classic. I decided to make this dish oven-friendly
    using less oil, and an easier cleanup. This dish tastes great with potato salad, or mashed
    potatoes and a nice crisp salad. Tastes great the next day cold too! It's a family-favorite!.
    Enjoy with fresh squeezed lemon juice.`,
    method: '',
    ingredients: ''
  }, {
    id: '7e1d144fbd18af3fe598dd20b0a973e1',
    name: 'Grilled Cheese Sandwich',
    imagePath: '',
    readyIn: 20,
    averageRaiting: 1,
    skillLevel: SkillLevel.Beginner,
    description: `Bread, butter and Cheddar cheese - here's a way to make this classic sandwich in
    a nonstick pan.`,
    method: '',
    ingredients: ''
  }, {
    id: 'b87b496fc923f790267c141ac99adf1f',
    name: 'Chicken Cordon Bleu I',
    imagePath: '',
    readyIn: 45,
    averageRaiting: 3,
    skillLevel: SkillLevel.Experienced,
    description: `This entree is easy and delicious! It's one of my husband's favorites! Try to use
    the largest chicken breasts you can find so you'll be able to roll them easier.`,
    method: '',
    ingredients: ''
  }, {
    id: '425b35fb162d0be535ab90fceb3e4d41',
    name: 'Bucatini All Amatriciana',
    imagePath: '',
    readyIn: 39,
    averageRaiting: 2,
    skillLevel: SkillLevel.Easy,
    description: `This pasta dish is my signature dish. I really enjoy making this pasta, especially
    with the right ingredients like guanciale.`,
    method: '',
    ingredients: ''
  }, {
    id: '88e79955f7baa96eb82de3816063f9ec',
    name: 'Best Lasagna',
    imagePath: '',
    readyIn: 135,
    averageRaiting: 3,
    skillLevel: SkillLevel.Experienced,
    description: `It takes a little work, but it is worth it.`,
    method: '',
    ingredients: ''
  }, {
    id: 'e69c790d4c1bbeeba00d05e1d00fe529',
    name: `Jan's Jalapeno Popper Pizza`,
    imagePath: '',
    readyIn: 60,
    averageRaiting: 5,
    skillLevel: SkillLevel.Beginner,
    description: `All the goodness of jalapeno poppers in a pizza topping.`,
    method: '',
    ingredients: ''
  }, {
    id: '51169da6454d8107b5a6f71ae7dd1649',
    name: 'Creamy Chicken and Wild Rice Soup',
    imagePath: '',
    readyIn: 25,
    averageRaiting: 4,
    skillLevel: SkillLevel.Intermediate,
    description: `A supremely filling, hearty soup. I serve this on cold rainy days with a loaf of
    homemade bread. Hint: this is perfect for leftover rotisserie chicken or chicken you've pulled
    from the bone after making homemade chicken stock! This soup makes great leftovers, but you might
    want to thin it slightly with skim milk or water when reheating.`,
    method: '',
    ingredients: ''
  }, {
    id: '06b2b65afa80476f8b4662960f5f9300',
    name: 'Slow Cooker Mediterranean Lentil Stew',
    imagePath: '',
    readyIn: 85,
    averageRaiting: 5,
    skillLevel: SkillLevel.Intermediate,
    description: `This is an excellent slow cooker recipe... Mix ingredients and let cook. Delicious!
    Spiced with cumin and coriander and flavored with tomato paste, this veggie-filled lentil stew
    will keep you warm for winter, and all year round! Good with a loaf of fresh-baked rustic bread!
    Vegetarian and vegan. Serve with a piece of bread for dipping.`,
    method: '',
    ingredients: ''
  }, {
    id: '4f58dff265c8d2c38c7b411a7ef41c95',
    name: 'Cream Cheese and Crab Sushi Rolls',
    imagePath: '',
    readyIn: 105,
    averageRaiting: 3,
    skillLevel: SkillLevel.Easy,
    description: `Delicious and surprisingly simple to make. Sushi is expensive to buy at the
    supermarket, so making your own will save you tons of money. My husband is a sushi freak! I make
    this for him all the time.`,
    method: '',
    ingredients: ''
  },
];

/**
 * Data source for the DomainList view.
 */
export class DomainRecipeListConfiguration {
  static get DATASOURCE(): RecipeEditViewModel[] {
    return RECIPES_LIST_MOCK_DATA;
  }
}
