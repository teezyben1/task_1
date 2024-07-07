const axios = require('axios');


const home = async (req, res) => {

  // Get the ip adderss from the request body
    const ipAddress = req.ip

    const userLoctionInfo = {
          // Set endpoint and your access key
          ip :ipAddress,
          accessKey :'d7bcadc3-3c27-408c-8fbc-5cdaf8be0310',
      }
      url = 'https://apiip.net/api/check?ip='+ userLoctionInfo.ip +'&accessKey='+ userLoctionInfo.accessKey
    
      try {
            // Make a request and store the response
            const response = await axios.get(url);
            const result = response.data;
            const latitude = result.latitude;
            const longitude = result.longitude
            const weather = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`)

            res.json({
              client_ip:result.ip,
              loction:result.city,
              greeting: `Hello mark! the temperature is ${weather.data.current.temperature_2m} degrees Celcius in ${result.city}`

            })
      
            } catch (error) {
              console.log(error)
              
            }
    
  }
  
  module.exports = home
  