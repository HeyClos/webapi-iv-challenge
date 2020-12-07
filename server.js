const express = require('express');

const postRouter = require('./posts/postRouter')
const userRouter = require('./users/userRouter')

const server = express();

//global middleware
server.use(express.json());
server.use(logger);

//we can use middleware locally 
server.use('/posts', postRouter);
server.use('/users', userRouter)


//route handlers
// server.get('/', (req, res) => {
//   res.status(200).json({ api: 'its working '})
// })


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

// custom middleware
function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      'Origin'
    )}`
  );

  next();
}

module.exports = server;