function getData() {
    console.log("getData() started");
    var loadedData = loadData();
    return loadedData;
}
function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>"
    return msg;
}
class InputData{
    constructor(
        //name the properties
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ){
        //substantiate aka make real
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;


    }
}

function updateDisplay(){
    console.log("updateDisplay() started");
    theTime = new Date();
    //put the current time in the console for troubleshooting
    console.log(
        theTime.getHours() + ":"
     + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" + 
     (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds(): theTime.getSeconds())
    );

    //put the current time in the display called "timeDisplay"
    document.getElementById("timeDisplay").innerHTML = (
        theTime.getHours() + ":"
        + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes(): theTime.getMinutes()) + ":"
        + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds())
    );
    //need to make a variable to track time
    var timeRead = data[index].time_seconds;
    //let's work on the table now
    if(timeRead >= 10){
        document.getElementById("data").rows["seconds"].innerHTML = 
            dataRow("Time Elapsed", data[index].time_seconds, "seconds");
        document.getElementById("data").rows["latitude"].innerHTML = 
            dataRow("Latitude", data[index].latitude, "°");
        document.getElementById("data").rows["longitude"].innerHTML = 
            dataRow("Longitude", data[index].longitude, "°");
        document.getElementById("data").rows["gpsAltitude"].innerHTML = 
            dataRow("GPS Altitude", data[index].gps_altitude, "meters");
        document.getElementById("data").rows["bmpSensorAlt"].innerHTML = 
            dataRow("BMP Altitude", data[index].bmpSensor_altitude, "meters");
        document.getElementById("data").rows["bmpSensorPress"].innerHTML = 
            dataRow("BMP Pressure", data[index].bmpSensor_pressure, "barr");
        document.getElementById("data").rows["bmpSensorTemp"].innerHTML = 
            dataRow("BMP Temperature", data[index].bmpSensor_temp, "°C");
        document.getElementById("data").rows["digSensorTemp"].innerHTML = 
            dataRow("Digital Temperature", data[index].digSensor_temp, "°C");
        document.getElementById("data").rows["cssSensorTemp"].innerHTML = 
            dataRow("CSS Temperature", data[index].cssSensor_temp, "°C");
        document.getElementById("data").rows["cssSensorCO2"].innerHTML = 
            dataRow("CSS eCO2", data[index].cssSensor_eCO2, "ppm");
        document.getElementById("data").rows["cssSensorTVOC"].innerHTML = 
            dataRow("CSS TVOC", data[index].cssSensor_TVOC, "ppm");
        document.getElementById("data").rows["UV"].innerHTML = 
            dataRow("UV", data[index].UV, "");
        document.getElementById("data").rows["accelX"].innerHTML = 
            dataRow("acceleration X", data[index].accelX, "m/sec");
        document.getElementById("data").rows["accelY"].innerHTML = 
            dataRow("acceleration Y", data[index].accelY, "m/sec");
        document.getElementById("data").rows["accelZ"].innerHTML = 
            dataRow("acceleration Z", data[index].accelZ, "m/sec");
        document.getElementById("data").rows["magneticX"].innerHTML = 
            dataRow("magnetic X", data[index].magneticX, "T");
        document.getElementById("data").rows["magneticY"].innerHTML = 
            dataRow("magnetic Y", data[index].magneticY, "T");
        document.getElementById("data").rows["magneticZ"].innerHTML = 
            dataRow("magnetic Z", data[index].magneticZ, "T");
        document.getElementById("data").rows["gyroX"].innerHTML = 
            dataRow("gyroscope X", data[index].gyroX, "°/sec");
        document.getElementById("data").rows["gyroY"].innerHTML = 
            dataRow("gyroscope Y", data[index].gyroY, "°/sec");
        document.getElementById("data").rows["gyroZ"].innerHTML = 
            dataRow("gyroscope Z", data[index].gyroZ, "°/sec");
    }
    if(index < 500) {
        index++;
    } else {
        index = 0;
    }
}