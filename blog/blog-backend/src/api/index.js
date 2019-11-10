const Router = require("koa-router");
const posts = require('./posts');

const api = new Router();

api.use("/posts", posts.routes());

//라우트 내보내기
module.exports = api;
