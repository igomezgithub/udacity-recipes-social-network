import cors from 'cors';
import express from 'express';
import { sequelize } from './sequelize';

import {IndexRouter} from './controllers/v0/index.router';

import {V0_RECIPE_MODELS} from './controllers/v0/model.index';

(async () => {
  await sequelize.addModels(V0_RECIPE_MODELS);
  console.log('Connecting to sequelize and creating database and all tables...');
  await sequelize.sync();

  const app = express();
  const port = process.env.PORT || 3000;

  // Looks at requests where the Content-Type: application/json header is present 
  // and transforms the text-based JSON input into JS-accessible variables under req.body.
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // We set the CORS origin to * so that we don't need to
  // worry about the complexities of CORS this lesson. It's
  // something that will be covered in the next course.
  app.use(cors({
    allowedHeaders: [
      'Origin', 'X-Requested-With',
      'Content-Type', 'Accept',
      'X-Access-Token', 'Authorization',
    ],
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    preflightContinue: true,
    origin: '*',
  }));

  app.use('/api/v0/', IndexRouter);

  // Root URI call
  app.get( '/', async ( req, res ) => {
    res.send( '/api/v0/' );
  } );


  // Start the Server
  try {
    app.listen( port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
