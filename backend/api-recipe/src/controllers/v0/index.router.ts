import {Router, Request, Response} from 'express';
import {RecipeRouter} from './recipe/routes/recipe.router';

const router: Router = Router();

router.use('/recipe', RecipeRouter);

router.get('/', async (req: Request, res: Response) => {
  res.send(`V0`);
});

export const IndexRouter: Router = router;
