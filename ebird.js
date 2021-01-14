// const { default: EbirdClient } = require("ebird-client");

// const ebird = new EbirdClient(process.env.API_KEY);

// ebird.recentNearbyObservations({
//     lat: 40.7128,
//     lng: -74.0060,
//     maxResults: 25,
// }).then((data) => console.log(data));

var axios = require('axios');

var config = {
  method: 'GET',
  url: 'https://api.ebird.org/v2/data/obs/geo/recent?lat=40.786003&lng=-73.96196,back=7,dist=5',
  headers: { 
    'X-eBirdApiToken': '25f7blekakfl'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});