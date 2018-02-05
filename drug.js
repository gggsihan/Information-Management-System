//定义药品model

var Sequelize = require('sequelize');
var sequelize = require('./db');

var Drug = sequelize.define('drug',{
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

exports.newDrug = function(drugName,subject,specification,dosageForm,inventory){
    return Drug.create({
        medicine:drugName,
        subject:subject,
        specification:specification,
        dosageform:dosageForm,
        inventory:inventory
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

exports.findBySubject = function(subject){
    return Drug.findAll({
        where:{
            subject:subject
        }
    })
}