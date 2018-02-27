var drug = require('../models/drug');
var drugEntry = require('../models/drugEntry');
var drugOutput = require('../models/drugOutput');

module.exports={
    "POST /inventory":async(ctx,next)=>{
        await drug.findAllDrug()
        .then(result=>{
            if(result){
                ctx.body={
                    data:result
                }
            };
        })
    },

    "POST /entryList":async(ctx,next)=>{
        await drugEntry.findAllDrugEntry()
        .then(result=>{
            if(result){
                ctx.body={
                    data:result
                }
            }
        })
    },

    "POST /outputList":async(ctx,next)=>{
        await drugOutput.findAllDrugOutput()
        .then(result=>{
            if(result){
                ctx.body={
                    data:result
                }
            }
        })
    }
}