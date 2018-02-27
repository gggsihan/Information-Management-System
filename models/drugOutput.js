//定义出库单

var Sequelize = require('sequelize');
var sequelize = require('../db');

var DrugOutput = sequelize.define('output',{
    number:{
        type:Sequelize.STRING,
        field:'number'
    },
    medicine:{
        type:Sequelize.STRING,
        field:'medicine'
    },
    quantity:{
        type:Sequelize.INTEGER,
        field:'quantity'
    },
    date:{
        type:Sequelize.STRING,
        field:'date'
    }
},{
    freezeTableName:false
});

var drugOutput=DrugOutput.sync({force:false});

exports.newDrugOutput=function(drugNum,drugName,quantity,date){
    return DrugOutput.create({
        number:drugNum,
        medicine:drugName,
        quantity:quantity,
        date:date
    });
};

exports.findAllDrugOutput=function(){
    return DrugOutput.findAll();
}