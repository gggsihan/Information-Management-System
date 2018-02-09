//加载注册页面
var someone = require('../models/user');

module.exports={
    'GET /loginPage':async(ctx,next)=>{
        ctx.render('signup.html',{
            title:'Login'
        })
    },

    'POST /loginPage': async (ctx, next) => {
        var
            name = ctx.request.body.name || '',
            password = ctx.request.body.password || '',
            rePassword = ctx.request.body.rePassword || '';
        await someone.findByName(name)
            .then(result=>{
                if(rePassword != password || password == ""){
                    ctx.body = {
                        data:-1
                    }
                }else if(result!=null){ //用户存在
                    ctx.body = {
                        data:-2
                    }
                }else{
                    ctx.body = {
                        data:1
                    }
                    console.log('Signup ok!');
                    someone.addUser(name, password);
                    
                }
            })
        
    }
}