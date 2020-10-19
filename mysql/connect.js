function connect(){
    var mysql  = require('mysql');  //调用MySQL模块
    //创建一个connection
    var connection = mysql.createConnection({   
        host     : 'localhost',       //主机
        user     : 'root',            //MySQL认证用户名
        password:'jobs@512',
        port:   '3306',
        database: 'talkpool'
    });
    
    //创建一个connection
    connection.connect(function(err){
        if(err){     
            console.log('[query] - :'+err);
            return;
        }
        console.log('数据库连接成功');
    }); 
    return connection
}

module.exports={
    connect
}