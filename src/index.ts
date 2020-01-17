import app from './App'

const port = 8090;

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
});
