"use strict";

const webpack = require("webpack");
const devServer = require("webpack-dev-server");
const config = require("../webpack.config");
const { spawn } = require("child_process");

var spawnedElectronApp = null;

const startElectronApp = () => {
	return spawnedElectronApp = spawn(
		'npm', ['run', 'electron'],
		{ shell: true, env: process.env, stdio: 'inherit' }
	)
	.on('close', code => process.exit(code))
	.on('error', spawnError => console.error(spawnError));
}

const compiler = webpack(config, (err, stats) => {
	console.log(stats.toString({ colors: true }));

	if (!spawnedElectronApp) {
		spawnedElectronApp = startElectronApp();
	}
});

const server = new devServer(compiler, config.devServer);
server.listen(8080, "127.0.0.1", function() {
	console.log("Starting server on http://localhost:8080");
	console.log("=> Waiting for webpack to finish compiling...");
});