var child_process = require('child_process');
var openApp = function () {
    var str = "1";
    child_process.exec('npm start').stdout.on('data', function (data) {
        console.log('±ê×¼Êä³ö£º' + data);
        console.log('in£º' + str);
        str = data;
        console.log('inlast£º' + str);
    });
}
openApp();