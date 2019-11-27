import Router from "koa-router";
import * as authCtrl from "./auth.ctrl";

const auth = new Router();

auth.post("/register", authCtrl.register);
auth.post("/login", authCtrl.login);
auth.post("/check", authCtrl.check); // get 사용시 Error: Request failed with status code 405 at createError 
auth.post("/logout", authCtrl.logout);

export default auth;
