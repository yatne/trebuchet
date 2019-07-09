const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const admin = require('firebase-admin');

admin.initializeApp({
	credential: admin.credential.applicationDefault()
});

const db = admin.firestore();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/votes', async (req, res) => {
	await db.collection('counter').doc('votes').get()
		.then((votes) => {
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(votes.data()));
		});
});

app.get('/vote', async (req, res) => {
	const voteCount = await db.collection('counter').doc('votes').get()
		.then((votes) => {
			return votes.data().votes;
		});
	await db.collection('counter').doc('votes').set({
		votes: voteCount + 1
	});
	res.send('OK');
});

app.use(express.static(path.join(__dirname, '../build')));

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(8080, () =>
	console.log('Express server is running on localhost:8080')
);