const app = require("./app")
const ipInfo = require("ip-info-finder");

const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    const ipAddress = req.ip
    

    const locationInfo = ipInfo.getIPInfo(ipAddress).then(data => {
     
})
.catch(err => console.log(err));
    res.send(`Hello World! ${ipAddress} ${locationInfo}`)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))