var fs = require('fs'),
    xml2js = require('xml2js');


class XmlToJsonConverter {
    constructor(file) {
        this.file = file;
    }

    convert(handle) {
      var parser = new xml2js.Parser();
        fs.readFile(this.file, (err, data) => {
            if(err){
                return handle(new Error(`Erro na leitura do arquivo. Detalhe : ${err}`));
            }
            parser.parseString(data, (err, result) => {
                if(err){
                    return handle(new Error(`Erro na conversão do XML. Detalhe : ${err}`));
                }
                handle(null, result);
            });
        });
    }
}

module.exports = XmlToJsonConverter;