const mysql=require('../mysql/connect')

function query(sql,data){
    return new Promise((resolve, reject) => {
        mysql.connect().query(sql,data,function(err,result){
            if(err){
                console.log(err)
                reject()
            }else{
                console.log(result)
                resolve(result)
            }
            mysql.connect().end()
        })
    })
}

module.exports={
    query
}