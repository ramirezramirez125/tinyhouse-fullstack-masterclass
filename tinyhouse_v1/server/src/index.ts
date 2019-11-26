
import express from 'express'
import bodyParser from 'body-parser'
import { listings } from "./listings"
const app = express()
const port = 9000

app.use(bodyParser.json())

app.get("/listings", (_req, res) => {
  res.send(listings);
});

app.post("/delete-listing", (_req, res) => {
  const id = _req.body.id
  for (let index = 0; index < listings.length; index++) {
    if(listings[index].id === id) {
      return res.send(listings.splice(index, 1))
    }
    return res.send("Failed to delete listing.")
  }
})

app.listen(port)
console.log(`[app]: http://localhost:${port}`)
