const app = require("./app")
const getGeoData = require("@sasmeee/ip-locator");

const port = process.env.PORT || 8080

app.get('/', async (req, res) => {
    const ipAddress = req.ip
    const data = await getGeoData(ipAddress);
console.log(data);
    


    res.send(`Hello World! ${ipAddress} ${data}`)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))