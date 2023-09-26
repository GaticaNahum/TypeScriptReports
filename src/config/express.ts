import express, {Application} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app: Application = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors ({
    origin : '*'
}));

app.use(express.json({limit: '50mb'}));

//App - Routes

app.get('/', (req, res) => {
    res.send('Amonos a mimir');
})

export default app;