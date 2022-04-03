const os = require("os")
const numCPUS = os.cpus().length;
const hostName = os.hostname();
const archInfo = os.arch();
const platformInfo = os.platform()
console.log("Running on: \nPlatform: %s\nArch: %s\nHost: %s\nCPUs: %d",
platformInfo, archInfo, hostName, numCPUS)
