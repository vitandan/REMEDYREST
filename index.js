var request = require("request");


var options = { method: 'POST',
  url: 'http://192.168.4.144:8008/api/arsys/v1/entry/HPD:IncidentInterface_Create/',
  headers: 
   { 'Cache-Control': 'no-cache',
     'Content-Type': 'application/json',
     Authorization: 'AR-JWT eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsNWlQTTFhQU9Bc1BhNzhwS2xGUkY0VnEwU2FyTlRZZDZ0c0lYeDFtRWJsOVNTXC9ZTFZSSll0NG8wSmFUSjVUMEJWU0cxVUNpRzdyWmRYNkdoY1Vndlo3SmdPMjBmWTlCWlZweFBUNExNaWVYbDRYZDBhcFhwUT09IiwibmJmIjoxNTMyMDY1MTI1LCJpc3MiOiJXSU4tOVZMUktJUUlIVlMiLCJleHAiOjE1MzIwNjg4NDUsIl9jYWNoZUlkIjoxNTE3LCJpYXQiOjE1MzIwNjUyNDUsImp0aSI6IklER0FBQzQ3Q1dMQ0JBUDJGN0RYUDFJTVlQU0NVNiJ9.aWmYNCkpIt7Qpnqbw5e0hrKlvT0zC7pkYq-_xyG7_FQ' },
  body: 
   { values: 
      { First_Name: 'vikram',
        Last_Name: 'tandan',
        Impact: '1-Extensive/Widespread',
        Urgency: '3-Medium',
        'Reported Source': 'Web',
        Service_Type: 'User Service Request',
        Status: 'New',
        Description: 'Rest API Testing 2' } },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(response);
});
