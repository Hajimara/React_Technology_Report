import Router from "koa-router";
import posts  from './posts';

const api = new Router();

api.use("/posts", posts.routes());

//라우트 내보내기
export default api;
