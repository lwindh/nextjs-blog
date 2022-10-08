import express from 'express'
import {render} from './utils';

const app = express()

app.use(express.static('public'));

app.get('/', (req, res) => {
  const html = render(req);
  res.send(html);
})

app.listen(3001, () => {
  console.log('listen:3001')
})
