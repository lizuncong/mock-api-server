const express = require('express');

const app = express();

const router = express.Router()


app.use(express.json());

app.use(express.urlencoded({ extended: false }))

router.get('/', function(req, res) {
  res.send('home')
})

router.get('/product/list', function(req, res){
  res.send({
    code: 0,
    msg: 'success',
    data: [
      {
        title: '标题1',
        value: 'hahahah'
      }
    ]
  })
})

app.use('/api/v1', router)

const server = app.listen(5008, () => {
  const { address, port } = server.address()
  console.log('HTTP服务启动成功: http://%s:%s', address, port)
})
