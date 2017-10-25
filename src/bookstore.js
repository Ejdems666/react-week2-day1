class BookStore {

    constructor() {
        this._books = [
            {id: 1, title: "How to Learn JavaScript - Vol 1", info: "Study hard"},
            {id: 2, title: "How to Learn ES6", info: "Complete all exercises :-)"},
            {id: 3, title: "How to Learn React", info: "Complete all your CA's"},
            {id: 4, title: "Learn JavaScript, React and MobX", info: "Don't drink beers, until Friday (after four)"}
        ]
        this._nextID = 5;
    }

    get books() {
        return this._books;
    }

    addBook(book) {
        book.id = this._nextID++;
        this._books.push(book);
    }

    deleteBook(id) {
        let targetedIndex = this.findIndexById(id)
        if (targetedIndex) {
            this._books.splice(targetedIndex, 1);
        }
    }

    findIndexById(id) {
        return this._books.findIndex((book) => book.id === id);
    }

    getBook(id) {
        return this._books.find((book) => book.id === id)
    }

    editBook(book) {
        let targetedIndex = this.findIndexById(book.id)
        if (targetedIndex) {
            this._books[targetedIndex] = book;
        }
    }
}

export default new BookStore();