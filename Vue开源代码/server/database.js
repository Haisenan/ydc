const Router = require('koa-router');
const re = require('./lib/re');
let sqlRouter = new Router();
const body = require('koa-better-body');
const guid = require('uuid');
const config = require('./config');


// 这些都是 省
sqlRouter.get('/sheng',async ctx=>{
  let data = await ctx.db.query('SELECT * FROM city WHERE type = 1');
  ctx.body = data;
});
// 这些 都是市区
sqlRouter.get('/city/:pid',async ctx=>{
  let {pid} = ctx.params;
  let data = await ctx.db.query('SELECT * FROM city WHERE pid=?',pid);
  ctx.body = data;
});

// reg =>注册用户    inset 数据  通过 post``
sqlRouter.post('/form3',async ctx=>{
  let post = ctx.request.fields;
  console.log(ctx.request.fields);
  // ctx.body = post;
  if(!re.email.test(post['email'])){
     ctx.body = {err:1,msg:'email 未通过校验'}
  }else{
    // 获取图标路径
    ctx.path = await ctx.request.fields.icon[0].path;

    await ctx.db.query(
      "INSERT INTO user_table (email, password, display_name, slogan, catalog, icon, description, other_channels, name, identify_number, province, city, qq_wx, recommend_code, token, token_expires) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [post['email'], post['password'], post['display_name'], post['slogan'], post['catalog'], ctx.path, post['description'], post['other_channels'], post['name'], post['identify_number'], post['province'], post['city'], post['qq_wx'], post['recommend_code'], '', 0]
    );
     ctx.body = {err:0,msg:'可以插入数据库'}
  }
});
// login =>登陆页面
sqlRouter.post('/login',async ctx=>{
   let {email,password}= ctx.request.fields;
   let rows = await ctx.db.query("SELECT * FROM user_table WHERE email = ?",[email]);
   if(rows.length == 0){
      ctx.body = {err:1,msg:'没有找到邮箱账户'}
   }else if(rows[0]['password'] != password ){
     ctx.body = {err:1,msg:'This password or error'}
   }else{
     token = guid().replace(/\-/g,'');
     token_expires = Math.floor((Date.now() + config.TOKEN_AGE)/1000);

     // 存入 token 唯一表示  存入事件登陆周期
     await ctx.db.query('UPDATE user_table set token=?,token_expires=?',[token,token_expires]);
     ctx.body = {err:0,msg:'验证成功',token:token,email:email, password:password,icon:rows[0].icon}
   }
});
// catalogs => 分类default
sqlRouter.get('/catalogdefault',async ctx=>{
   let res = await ctx.db.query("SELECT *  FROM catalog_table WHERE parentID=0");
  ctx.body = res;
});
// 分类 修改后 查询的
sqlRouter.get('/catalogs/:parentid',async ctx=>{
   let {parentid} = ctx.params;
   let res = await ctx.db.query("SELECT ID,title FROM catalog_table WHERE parentID=?",parentid);
  ctx.body = res;
});
//add   =>发布文章 {在登录没 ？ 登陆了有token没有  token跟数据存放的一样么？  一样了超时了么？}
sqlRouter.post('/add_article',async ctx=>{
  let post = ctx.request.fields;
  let token = post['token'];

  // 需求添加  验证  token 是否 有  如果有 可以添加  还有 没有超时
  let row = await ctx.db.query("SELECT ID,token_expires FROM user_table WHERE token=?",[token]);

  if(!row.length){
      ctx.body = {err:1,msg:'not token'};
      // this.$router.push('/login');
  }else{
      // 验证 判断token过期了没 ?   在服务器存入的时候  是算的两天
      let {ID,token_expires} = row[0];   //只要找到的第一个
      let now = Math.floor(Date.now()/1000);  //获取现在的事件 描述

      if(now > token_expires ){
        ctx.body = {err:1,msg:'Request timeout'};
      }else{
          let catalogs=post['catalogs'].join(',');
        // 有token  时间没有超时那么就   插入的添加文章now时间
        await ctx.db.query(
          "INSERT INTO article_table (title, content,catalogs,cover, userID,post_time,review) VALUES(?, ?,?,?,?,?,?)",[post['title'], post['content'],catalogs,post['cover'],ID,now,0]
        );
        ctx.body = {err:0,msg:'success'};
      }
  }
});

// 对外开放
module.exports=sqlRouter.routes();
