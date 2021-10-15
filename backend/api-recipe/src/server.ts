import cors from 'cors';
import express from 'express';

import bodyParser from 'body-parser';

(async () => {

  const app = express();
  const port = process.env.PORT || 3000;

  // Looks at requests where the Content-Type: application/json header is present 
  // and transforms the text-based JSON input into JS-accessible variables under req.body.
  app.use(bodyParser.json());

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

  // Root URI call
  app.get( '/', async ( req, res ) => {
    res.send( '/api/v0/' );
  } );


  // Start the Server
  app.listen( port, () => {
    console.log( `press CTRL+C to stop server` );
  } );
})();
