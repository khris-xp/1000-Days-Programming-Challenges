import express, { Request, Response } from 'express';

const app: any = express();

const PORT: number = 5000;

// Middleware
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    return res.send(`Hello World!`);
})

app.post('/api/data', (req: Request, res: Response) => {
    console.log(req.body);
    return res.sendStatus(200);
})

app.all('/api/all', (req: Request, res: Response) => {
    return res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`)
})