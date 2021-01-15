const http = require("http")
const fs= require("fs")
let errorcode;
const server = http.createServer((request , response)=>{

    // response

   if (request.url === "/" || request.url === "/favicon.ico") {
    response.setHeader("Content-Type","text/html")
    openhtml("./front-end/index.html" , response) 
   } else {
       errorcode = 404
       console.error("404");
       response.setHeader("Content-Type","text/html")
        response.write("<h2>404</h2>")
        response.end()
   }
    
   if (!errorcode) {
    console.log("A request !!!");
    console.log(`The request Url is : ${request.url}`);
    console.log(`The request method is : ${request.method}\n`); 
}else{
    errorcode = undefined
}
})
server.listen(3000 , "localhost",()=>{
    console.log("server is ready on port 3000");
})
function openhtml(path , response) {
    fs.readFile(`${path}`, (err , data)=>{
        if (err) {
            console.log(err);
        }else{
        response.write(data)
    response.end()
    }
    })
}