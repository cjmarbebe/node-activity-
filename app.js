const http = require('http')
const port = 4001

const server = http.createServer(function(req, res){
res.write('helloqorld)
res.end()
})

server.listen(port, function(error){
 if(error){
  console.log('something went wrong', error)
 }else{
  console.log('server is working' working + port)
 }
})
