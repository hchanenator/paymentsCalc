var moment = require('moment');

/*
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("currently it is " + moment().isoWeekday());
  res.end();
}).listen(8080);
*/

var dates = ["2018-01-01", "2018-02-01", "2018-03-01", "2018-04-01", "2018-05-01", "2018-06-01", "2018-07-01", "2018-08-01", "2018-09-01", "2018-10-01", "2018-11-01", "2018-12-01"];
var months = 6;
var values = dates.map(function (currentDate) {
	return {
		date: currentDate,
		value: Math.floor(moment(currentDate).add(months, "months").diff(moment(currentDate), "weeks", true))
	};
});
console.log(values);
