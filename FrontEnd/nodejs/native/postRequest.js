const http = require('http')
const querystring =  require('querystring')


const server =  http.createServer( (req,res) => {
  if(req.method === 'POST'){
    //数据格式
    console.log('content-type',req.headers['content-type'])
  }
  //接收数据

    


  console.log(req.method)
  const url = req.url 
  console.log(req.url)
  req.query = querystring.parse(url.split('?')[1])
  res.end(JSON.stringify(req.query))
 
})

server.listen(5000,()=>{
  console.log('app is running on 5000')
})