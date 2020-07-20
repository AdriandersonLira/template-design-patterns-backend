import express from 'express';
import console from 'console';
import routes from './routes';
import logRequest from './middlewares/logRequests.middleware';

const app = express();

app.use(express.json());

app.use(logRequest);

app.use(routes);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
