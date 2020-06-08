var fs = require('fs'),
    xml2js = require('xml2js');


module.exports = class XmlToJsonConverter {
    constructor(file) {
        this.file = file;
    }

    convert(handle) {
      var parser = new xml2js.Parser();
        fs.readFile(this.file, function(err, data) {
            parser.parseString(data, function (err, result) {
                handle(result);
            });
        });
    }
}

