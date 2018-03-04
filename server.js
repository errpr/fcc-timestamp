var express = require('express');
var app = express();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

app.use(express.static('public'));

app.get("/:date", function (request, response) {
  let d = Date.parse(request.params.date);
  if(d) {
    d = new Date(d);
  } else {
    d = new Date(+request.params.date);
  }
  console.log(d)
  response.json({
    unix: d.getTime(),
    natural: `${months[d.getMonth()]} ${d.getDay()}, ${d.getFullYear()}`
  });
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
