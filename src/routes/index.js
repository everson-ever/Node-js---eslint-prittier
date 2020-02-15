import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('ok');
});

export default routes;
