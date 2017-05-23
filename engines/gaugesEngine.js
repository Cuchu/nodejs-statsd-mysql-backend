/**
 *
 *
 */
function MySQLBackendGaugesEngine() {
	var self = this;
}


/**
 *
 *
 */
MySQLBackendGaugesEngine.prototype.buildQuerries = function(gauges, time_stamp) {

	var querries = [];
	 // Iterate on each gauge
    for(var gaugeName in gauges) {
      var gaugeValue = gauges[gaugeName];
      
      console.log("Data: "+time_stamp+",'"+gaugeName+"',"+gaugeValue);
      querries.push("INSERT INTO `gauges_statistics` (`timestamp`, `name`, `value`) VALUES ("+time_stamp+", '"+gaugeName+"', "+gaugeValue+");");
    }

    return querries;
}


/**
 *
 *
 */
exports.init = function() {
	var instance = new MySQLBackendGaugesEngine();
  return instance;
};
