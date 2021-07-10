const usuarios=`{"data":
        [
        {"id":5,"email":"elmozapate@gmail.com","first_name":"Moet","last_name":"Zapata","avatar":"http://127.0.0.1:5500/FOTO_MOET.jpg","tipo":"administrador"},
        {"id":2,"email":"atatusa@gmail.com","first_name":"Mario","last_name":"Gutierrez","avatar":"http://127.0.0.1:5500/mario.jpg","tipo":"administrador"}
        
        ]
        }`
const fs = require('fs'); 
        let promesaTxt=new Promise((resolve,reject)=>{
            fs.writeFile('texto.txt',usuarios,(error)=>{
                if  (error){
                    reject(error);
                }else{
                    resolve();
                }
        });
        })
        promesaTxt
        .then(()=>{
          console.log("exito")
        })
        .catch((error)=>{
          console.log('chanfle')
        });