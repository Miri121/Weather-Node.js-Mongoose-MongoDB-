const requestApi = () => {
    return new Promise((resolve, reject) => {
        console.log('requestApi')
        let options = {
            method: "GET",
            url: 'https://openweathermap.org/api'
        }
        request(options, (err, res, body) => {
            if (err)
                reject(err)
            else {
                resolve(body)
            }
        })
    })
  }

  module.exports = requestApi;