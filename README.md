# time-nodejs
Time nodejs is a module to convert human read-able time to ms.
Just only save you to realize the calc
# Functions
```
//1) Seconds to MS
time.seconds(1)
# returns: 1000

//2) Minutes to MS
time.minutes(1)
# returns: 60000

//3) Hours to MS
time.hours(1)
# returns: 3600000

//4) Days to MS
time.days(1)
# returns: 86400000

//5) Return all time's
// Note: The output isn't fixed / floored.
let times = time.build(/* MS value, you can use time.<some>*/ time.days(1))
# returns: { days: 1, hours: 24, minutes: 1440, seconds: 86400, ms: 86400000}
# You can call:
times.minutes # Returns 1440
```

# Creator

For questions you can find me in discord: AguaDeCoco#1301
