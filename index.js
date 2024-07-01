const app = require("./app")
const ipInfo = require("ip-info-finder");

const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    const ipAddress = req.ip
    

ipInfo.getIPInfo(ipAddress).then(data => {
    const locationInfo = data
    res.send(`Hello World! ${ipAddress} ${locationInfo}`)
})
.catch(err => console.log(err));
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))