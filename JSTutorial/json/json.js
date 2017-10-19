$(document).ready(function () {
    var jqxhr = $.getJSON("package.json", function (data) {
        console.log(data.sinhvien[0].ten);

    });
});

