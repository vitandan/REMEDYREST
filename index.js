var request = require("request");


var options = { method: 'POST',
  url: 'http://192.168.4.144:8008/api/arsys/v1/entry/HPD:IncidentInterface_Create/',
  headers: 
   { 'Cache-Control': 'no-cache',
     'Content-Type': 'application/json',
     Authorization: 'AR-JWT eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJWYzhycUtESTc3QzlJTG1NSkNCeEdTNjNEY2MranhMREFnVnNzWUVKdkdQbTZ3WUYrYUZOQzdrbkFRdGRTOTZKSmlxS05tZ21YTXNKXC9DVGtCSlFxS2w2blQwTVdaXC93dUhFK29ESU1mTFJtczYrVlhiQWl4RkE9PSIsIm5iZiI6MTUzMjUxOTU4NywiaXNzIjoiUmVtZWR5OTEiLCJleHAiOjE1MzI1MjMzMDcsIl9jYWNoZUlkIjo3NDcsImlhdCI6MTUzMjUxOTcwNywianRpIjoiSURHQUFDNDdFUTdDUkFQMjVIUlZQMTgzSlc4SU41In0.K6MGq56OMt2Bog0ePJeAOkvtw2BqfSkiNFDfJ9-IHYU' },
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
