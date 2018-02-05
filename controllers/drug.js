var drug = require('../drug')

module.exports={
    'GET /drug':async(ctx,next)=>{
        ctx.render('drug.html',{
            title:'welcome'
        })
    },

    'POST /drug':async(ctx,next)=>{
        await drug.findAllDrug()
            .then(result=>{
                console.log('hhhhhhhhhhhhhhhh');
                if(result){
                    ctx.data=result;
                }
            })
    }
}