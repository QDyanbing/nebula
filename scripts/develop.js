const path = require("path");
const shelljs = require("shelljs");
const targetFile = path.resolve(__dirname, "../package.json");
const packagejson = require(targetFile);
const currentVersion = packagejson.version;
const versionArr = currentVersion.split(".");
const [mainVersion, subVersion, phaseVersion] = versionArr;

// 默认版本号
const newVersion = `${mainVersion}.${subVersion}.${+phaseVersion + 1}`;

function publish() {
  shelljs.sed("-i", `"version": "${currentVersion}"`, `"version": "${newVersion}"`, targetFile); // 修改版本号
  shelljs.exec("npm publish"); // 发布
}

publish();
