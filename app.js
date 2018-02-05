const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating');

const app = new Koa();

const isProduction = process.env.NODE_ENV === 'production';

app.use(async(ctx,next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

if(!isProduction){
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/',__dirname+'/static'))
}

//引入另一个middleware来解析原始request请求，然后，把解析后的参数，绑定到ctx.request.body中
//koa-bodyparser必须在router之前被注册到app对象上
app.use(bodyParser());

app.use(templating('views',{
    noCache:!isProduction,
    watch:!isProduction
}));


app.use(controller());

app.listen(3000);