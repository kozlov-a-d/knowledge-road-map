export default class Node{
    constructor(title = 'New node') {
        const date = Date.now().toString()
        this.id = date;
        this.title = title;
        this.annotation = null;
        this.content = null;
        this.author = 'Me';
        this.update = date;
        this.parent = null;
        this.childrens = [];
        this.links = [];
    }

    toObject() {
        return {
            id: this.id,
            title: this.title,
            annotation: this.annotation,
            content: this.content,
            author: this.author,
            update: this.update,
            parent: this.parent,
            childrens: this.childrens,
            links: this.links,
        }
    }
}
