
var drug = require('../drug');

module.exports= {
    'GET /addDrugPage':async(ctx,next)=>{
        ctx.render('addDrug.html',{
            title:'addDrug'
        })
    },
    
    'POST /addDrugPage': async (ctx, next) => {
        var 
            drugName = ctx.request.body.drugName || '',
            subject = ctx.request.body.subject || '',
            specification = ctx.request.body.specification || '',
            dosageForm = ctx.request.body.dosageForm || '',
            inventory = ctx.request.body.inventory || '';
        if(drugName != ''){
            console.log("add drug ok");
            drug.newDrug(drugName,subject,specification,dosageForm,inventory);
            ctx.render('signin-ok.html',{
                title:'Add Drug OK'
            })
        }else{
            console.log('add drug fail');
            ctx.body={
                data:1
            }
        }
    }
}