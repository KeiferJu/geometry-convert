# geometryconvert on android 6 #

使用：
document.addEventListener('deviceready', function () {
	window.GeometryConvert.getEncryPoint(116, 43, function (result) {
            if (result) {
                var lnglat = result.split(',');
                var lng = parseFloat(lnglat[0]);
                var lat = parseFloat(lnglat[1]);
                alert('lng:' + lng + ';lat:' + lat);
            }

        }, function (err) {
            alert(err);
        })
}, false);
