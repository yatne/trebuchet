const express = require('express');
const bodyParser = require('body-parser');
const storage = require('node-persist');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
storage.init();

app.get('/votes', async (req, res) => {
	const votes = await storage.getItem('votes');
	if (!votes) {
		await storage.setItem('votes', 0);
	}
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({votes}));
});

app.get('/vote', async (req, res) => {
	let votes = await storage.getItem('votes');
	if (votes === {}) {
		votes = 0;
	}
	await storage.setItem('votes', votes + 1);
	res.send('OK');
});

app.listen(3001, () =>
	console.log('Express server is running on localhost:3001')
);