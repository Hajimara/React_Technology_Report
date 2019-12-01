import Router from "koa-router";
import * as authCtrl from "./auth.ctrl";

const auth = new Router();

auth.post("/register", authCtrl.register);
auth.post("/login", authCtrl.login);
auth.get("/check", authCtrl.check); // get 사용시 Error: Request failed with status code 405 at createError // 클라이언트에서 불러올 때 post를 사용해서 일어난 문제였음 
auth.post("/logout", authCtrl.logout);

export default auth;
