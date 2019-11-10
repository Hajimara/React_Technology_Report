const Router = require("koa-router");
const posts = new Router();
const postsCtrl = require('./posts.ctrl');

posts.get("/", postsCtrl.list);
posts.post("/", postsCtrl.write);
posts.get("/:id", postsCtrl.read);
posts.delete("/:id", postsCtrl.remove);
posts.patch("/:id", postsCtrl.update);
posts.put("/:id", postsCtrl.replace);

module.exports = posts;
