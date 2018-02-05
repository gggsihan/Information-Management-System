//定义用户model

var Sequelize = require('sequelize');
var sequelize = require('./db');

//创建model
var Someone = sequelize.define('someone',{
    designation:{
        type:Sequelize.STRING,
        field:'designation'
    },
    password:{
        type:Sequelize.STRING,
        field:'password'
    }
}, {
    // 如果为 true 则表的名称和 model 相同，即 user
    // 为 false MySQL创建的表名称会是复数 users
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: false
});

// 创建表
// User.sync() 会创建表并且返回一个Promise对象
// 如果 force = true 则会把存在的表（如果users表已存在）先销毁再创建表,默认情况下 forse = false
var someone = Someone.sync({ force: false });

// 添加新用户
exports.addUser = function(userName,password) {
    // 向 user 表中插入数据
    return Someone.create({
        designation: userName,
        password:password
    });
};

// 通过用户名查找用户
exports.findByName = function(userName) {
    return Someone.findOne({ where: {designation: userName} });
};