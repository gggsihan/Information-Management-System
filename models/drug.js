//定义药品model

var Sequelize = require('sequelize');
var sequelize = require('../db');

var Drug = sequelize.define('drug',{
    number:{
        type:Sequelize.STRING,
        field:'number'
    },
    medicine:{
        type:Sequelize.STRING,
        field:'medicine'
    },
    subject:{
        type:Sequelize.STRING,
        field:'subject'
    },
    specification:{
        type:Sequelize.STRING,
        field:'specification'
    },
    dosageform:{
        type:Sequelize.STRING,
        field:'dosageform'
    },
    inventory:{
        type:Sequelize.STRING,
        field:'inventory'
    },
},{
    freezeTableName:false
});


var drug = Drug.sync({force:false});

exports.newDrug = function(drugNum,drugName,subject,specification,dosageForm){
    return Drug.create({
        number:drugNum,
        medicine:drugName,
        subject:subject,
        specification:specification,
        dosageform:dosageForm
    });
};

exports.findAllDrug = function(){
    return Drug.findAll();
}

exports.findByDrugName = function(drugName){
    return Drug.findAll({
        where:{
            medicine:drugName
        }
    });
}

exports.findByDrugNum = function(drugNum){
    return Drug.findAll({
        where:{
            number:number
        }
    })
}