var drug = require('../models/drug')

module.exports={
    'GET /drug':async(ctx,next)=>{
        ctx.render('drug.html',{
            title:'welcome'
        })
    },

    'POST /drug':async(ctx,next)=>{
        await drug.findAllDrug()
            .then(result=>{
                if(result){
                    ctx.body={
                        data:result
                    }
                };
            })
    },

    'POST /searchDrug':async(ctx,next)=>{
        var drugName=ctx.request.body.search;
        await drug.findByDrugName(drugName)
            .then(result=>{
                if(result){
                    ctx.body = {
                        data: result
                    }
                }else{
                    ctx.body={
                        data:-1
                    }
                }
                
            })
    }
}