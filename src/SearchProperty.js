
class SearchProperty {
    searchProperty(node, name, found) {
        if(node.hasOwnProperty(name)) {
            found(node);
        }
        if(node instanceof Object){
            Object.keys(node).forEach(key => this.searchProperty(node[key], name, found));
        }
    }
}

module.exports = SearchProperty;