import express from 'express';

const app = express();

const PORT = 8002;

app.get('/', (req: express.Request, res: express.Response) => {
	res.send('Hello World!');
});


app.listen(PORT, () => {
	console.log(`Listening on PORT: ${PORT}`);
})