const SearchProperty = require('./SearchProperty');
const XmlToJsonConverter = require('./XmlToJsonConverter');

let searchName = new SearchProperty();
let converter = new XmlToJsonConverter('./pom.xml');

let propNameForSearch = 'dependency';

converter.convert((err, json) => {
    if (err) return console.error(err);

    searchName.searchProperty(json, propNameForSearch, (found) => {
        let convert = found.dependency
                      .map((item) => `${item.groupId[0]} | ${item.artifactId[0]} | ${item.version[0]}`)
        convert.forEach((data) => console.log(data));
    });
});
