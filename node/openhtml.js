const fs = require("fs")
function openhtml(path , response) {
    fs.readFile(`${path}`, (err , data)=>{
        if (err) {
            console.log(err);
        }else{
        response.write(data)
        response.end()}
    })
}
module.exports =  openhtml()