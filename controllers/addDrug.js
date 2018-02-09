
var drug = require('../models/drug');

module.exports= {
    'GET /addDrugPage':async(ctx,next)=>{
        ctx.render('addDrug.html',{
            title:'addDrug'
        })
    },
    
    'POST /addDrugPage': async (ctx, next) => {
        var 
            drugNum = ctx.request.body.drugNum || '',
            drugName = ctx.request.body.drugName || '',
            subject = ctx.request.body.subject || '',
            specification = ctx.request.body.specification || '',
            dosageForm = ctx.request.body.dosageForm || '';
        if(drugName != ''){
            console.log("add drug ok");
            drug.newDrug(drugNum,drugName,subject,specification,dosageForm);
            ctx.body={
                data:1
            }
        }else if(drugNum==""){
            console.log('add drug fail');
            ctx.body={
                data:-1
            }
        }else{
            console.log('add drug fail');
            ctx.body={
                data:-2
            }
        }
    }
}