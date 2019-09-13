import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

import config from './configs/config';
import logger from './utils/logger';

dotenv.config();

process.on('uncaughtException', (err) => {
  logger.error(`Caught exception: ${err}\n`);
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan(':method :url :status :response-time ms'));

app.get('/', async (req, res) => {
  res.json({ ok: 200 });
});

// eslint-disable-next-line
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send('Error');
});

app.listen(config.API_PORT, (err) => {
  if (err) logger.error(err);
  logger.info(`Server started at ${config.API_PORT}`);
});
