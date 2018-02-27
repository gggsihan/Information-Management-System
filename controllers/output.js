var drug = require('../models/drug');
var drugOutput = require('../models/drugOutput');

module.exports={
    "GET /output":async(ctx,next)=>{
        ctx.render('drugOutput.html',{
            title:'welcome'
        })
    },

    "POST /output":async(ctx,next)=>{
        var 
            drugNum = ctx.request.body.drugNum || '',
            drugName = ctx.request.body.drugName || '',
            quantity = ctx.request.body.quantity ||'',
            date = new Date();
        if(drugNum==''){
            console.log('entry failed');
            ctx.body={
                data:-1
            }
        }else if(drugName==''){
            console.log('entry failed');
            ctx.body={
                data:-2
            }
        }else{
            await drug.findByDrugNum(drugNum)
                .then(result=>{
                    if(result){
                        drugEntry.newDrugOutput(drugNum,drugName,quantity,date);
                        if (result.inventory == null) {
                            result.inventory = 0;
                        }
                        var newQuantity = { 'inventory': parseInt(result.inventory) - parseInt(quantity) };

                        drug.updateInven(drugNum, newQuantity);
                        ctx.body = {
                            data: 1
                        }
                        console.log('entry success');
                    }else{
                        console.log('entry failed');
                        ctx.body={
                            data:-3
                        }
                    }
                    
                   
                })
        }
    }
}