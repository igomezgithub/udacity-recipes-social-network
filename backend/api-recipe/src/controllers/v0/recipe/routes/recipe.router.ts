import { Router, Request, Response } from 'express';
import { Recipe } from '../models/Recipe';
// import {NextFunction} from 'connect';
// import * as jwt from 'jsonwebtoken';
// import * as AWS from '../../../../aws';
// import * as c from '../../../../config/config';

const router: Router = Router();

// export function requireAuth(req: Request, res: Response, next: NextFunction) {
//   if (!req.headers || !req.headers.authorization) {
//     return res.status(401).send({message: 'No authorization headers.'});
//   }

//   const tokenBearer = req.headers.authorization.split(' ');
//   if (tokenBearer.length != 2) {
//     return res.status(401).send({message: 'Malformed token.'});
//   }

//   const token = tokenBearer[1];
//   return jwt.verify(token, c.config.jwt.secret, (err, decoded) => {
//     if (err) {
//       return res.status(500).send({auth: false, message: 'Failed to authenticate.'});
//     }
//     return next();
//   });
// }

// Get all recipes items
router.get('/', async (req: Request, res: Response) => {
  const items = await Recipe.findAndCountAll({order: [['id', 'DESC']]});
  // items.rows.map((item) => {
  //   if (item.url) {
  //     item.url = AWS.getGetSignedUrl(item.url);
  //   }
  // });
  res.send(items);
});

// Get a recipe resource
router.get('/:id',
    async (req: Request, res: Response) => {
      const {id} = req.params;
      const item = await Recipe.findByPk(id);
      res.send(item);
    });

// // Get a signed url to put a new item in the bucket
// router.get('/signed-url/:fileName',
//     requireAuth,
//     async (req: Request, res: Response) => {
//       const {fileName} = req.params;
//       const url = AWS.getPutSignedUrl(fileName);
//       res.status(201).send({url: url});
//     });

// Create a recipe with metadata
router.post('/',
    async (req: Request, res: Response) => {
      const title: string = req.body.title;
      const method: string = req.body.method;
      const ingredients: string = req.body.ingredients;
      const rate: number = req.body.rate;
      // const fileName = req.body.url; // same as S3 key name

      if (!title) {
        return res.status(400).send({message: 'Title is required or malformed.'});
      }

      // if (!fileName) {
      //   return res.status(400).send({message: 'File url is required.'});
      // }

      const item = new Recipe({
        title: title,
        method: method,
        url: '',
        ingredients: ingredients,
        rate: rate
      });

      const savedItem = await item.save();

      // savedItem.url = AWS.getGetSignedUrl(savedItem.url);
      res.status(201).send(savedItem);
    });

// Get a recipe resource
router.delete('/:id',
async (req: Request, res: Response) => {
  const {id} = req.params;
  await (await Recipe.findByPk(id)).destroy();
  res.status(204).send();
});

export const RecipeRouter: Router = router;
