const app = require("./app")
const port = 3000

app.get('/', (req, res) => {
    const ipAddress = req.ip
    res.send(`Hello World! ${ipAddress}`)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))