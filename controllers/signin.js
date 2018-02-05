//加载登录页面
var someone = require('../user');

module.exports= {
    'GET /':async(ctx,next)=>{
        ctx.render('signin.html',{
            title:'sign in'
        })
    },
    
    'POST /': async (ctx, next) => {
        var
            name = ctx.request.body.name || '',
            password = ctx.request.body.password || '';
        await someone.findByName(name)
            .then(result=>{
                if(result==null || name==""){
                    ctx.body={
                        data:-1
                    }
                }else if (password != result.password || password == "") {
                    ctx.body={
                        data:-2
                    }
                } else {
                    console.log("Signin ok")
                    ctx.body={
                        data:1
                    }
                }
            })
        
    }
}
