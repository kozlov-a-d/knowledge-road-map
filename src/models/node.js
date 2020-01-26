export default class Node{
    constructor(title = 'New node') {
        this.id = Date.now().toString();
        this.title = title;
        this.annotation = '';
        this.content = '';
        this.author = 'Me';
        this.update = Date.now().toString();
        this.parent = null;
        this.childrens = [];
        this.links = [];
    }
}
