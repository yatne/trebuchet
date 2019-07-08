const express = require('express');
const bodyParser = require('body-parser');
const storage = require('node-persist');
const path = require("path");

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

app.use(express.static(path.join(__dirname, '../build')));

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(8080, () =>
	console.log('Express server is running on localhost:8080')
);