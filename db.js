//数据库连接
var Sequelize = require('sequelize');

// new Sequelize(database, [username=null], [password=null], [options={}])
// class Sequelize 接收4个参数，后三个参数是可选的

module.exports = new Sequelize('nodejs','root','123456',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        max:5,  // 连接池中最大连接数量
        min:0,  // 连接池中最小连接数量
        idle:10000  // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
    }
})