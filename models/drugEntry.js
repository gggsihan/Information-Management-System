//定义入库单

var Sequelize = require('sequelize');
var sequelize = require('../db');

var DrugEntry = sequelize.define('entry',{
    number:{
        type:Sequelize.STRING,
        field:'number'
    },
    medicine:{
        type:Sequelize.STRING,
        field:'medicine'
    },
    quantity:{
        type:Sequelize.STRING,
        field:'quantity'
    },
    date:{
        type:Sequelize.STRING,
        field:'date'
    }
},{
    freezeTableName:false
});

var entry=DrugEntry.sync({force:false});

exports.newDrugEntry=function(drugNum,drugName,quantity,date){
    return DrugEntry.create({
        number:drugNum,
        medicine:drugName,
        quantity:quantity,
        date:date
    });
};

exports.findAllDrugEntry=function(){
    return DrugEntry.findAll();
}