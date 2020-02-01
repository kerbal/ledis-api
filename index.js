import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import CommandService from './services/command.service';
import store from './store/store';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());

app.get('/test', (req, res) => {
  res.status(200).send('running...');
});

app.get('/api/execute', (req, res) => {
  try {
    const response = CommandService.execute(req.query.command);
    res.status(200).send({
      ...response,
      success: true
    });
  }
  catch (error) {
    console.log(error);
    res.status(400).send({
      message: error.message,
      success: false
    });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, async () => {
  store.restore();
  console.log('server is listening on port ' + port);
});