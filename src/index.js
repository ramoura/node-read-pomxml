const XmlToJsonConverter = require('./XmlToJsonConverter');

var converter = new XmlToJsonConverter('./pom.xml')

converter.convert((node) => searchNode(node, 'dependency', (found) => {
    console.log(found);
}))


function searchNode(node, name, found) {
    if(node.hasOwnProperty(name)) {
        found(node);
    }
    if(node instanceof Object){
        Object.keys(node).forEach(key => searchNode(node[key], name, found));
    }
}