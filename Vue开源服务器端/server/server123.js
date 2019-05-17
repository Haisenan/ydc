const Koa = require('koa');
const Router = require('koa-router');
const mysql = require('mysql');
const co = require('co-mysql');
const body = require('koa-better-body');


// let obj = ;
let server = new Koa();
let router = new Router();

server.listen(8081);
server.use(async (ctx,next)=>{
  ctx.set('Access-Control-Allow-Origin', '*');

  await next();
});
server.use(body({
  upload:'upload',
  uploadDir:'./static/upload'
}));


let conn = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'',
  database:'ydc'
});

server.context.db = co(conn);
// server.use(obj);
// router.get('/', async ctx=>{
//   ctx.body='aaaaa';
// });
// 引入 二级路由器
router.use('/sql',require('./database'));
router.use('/api',require('./catelist'));
// 服务器选择主路由器
server.use(router.routes())
