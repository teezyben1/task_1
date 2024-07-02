const app = require("./app")

const port = process.env.PORT || 8080

app.get('/', async (req, res) => {
    const ipAddress = req.ip
    


    res.send(`Hello World! ${ipAddress} ${data}`)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))