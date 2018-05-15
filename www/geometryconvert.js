/*
 * MacAddress
 * Implements the javascript access to the cordova plugin for retrieving the device mac address. Returns 0 if not running on Android
 * @Navidmlk
 */

/**
 * @return the mac address class instance
 */
 var GeometryConvert = {

    getEncryPoint: function(lng, lat, successCallback, failureCallback){
        cordova.exec(successCallback, failureCallback, 'GeometryConvert',
            'getEncryPoint', [lng, lat]);
    }
 };

 module.exports = GeometryConvert;