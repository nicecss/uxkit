const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = "nihao";
});

app.listen(3000)
