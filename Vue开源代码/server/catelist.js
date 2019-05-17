const Router = require('koa-router');
let Drouter = new Router();

Drouter.get('/catelist', async ctx=>{
  ctx.body=['新闻','娱乐','财经','电竞'];
});

module.exports=Drouter.routes();
