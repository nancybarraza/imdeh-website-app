const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
	app.use(express.static(__dirname + '/dist/'));

	app.use((req, res, next) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
		next();
	});

	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname + '/dist/index.html'));
	});

	app.listen(PORT, () => {
		console.log(`Listening on port  ${PORT}`);
	});
};

startServer();
