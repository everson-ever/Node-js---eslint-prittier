import cors from 'cors';
import express from 'express';
import routes from './routes/index';

class App {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.disable('x-powered-by');
  }

  routes() {
    this.express.use('/api', routes);
  }
}

export default new App().express;
