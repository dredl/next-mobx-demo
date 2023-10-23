import {useStore} from "@/store";
import {books} from "@/utils";

export class BookService {
    constructor() {
        const store = useStore()
        this._store = store
    }
    fetchData() {
        const bookFromServer = {
            id: 0,
            title: "Harry Potter and Philosopher's Stone",
            release: "1997",
            image: "https://images-na.ssl-images-amazon.com/images/I/910ityjoncL.jpg",
            author: "	J. K. Rowling"
        }
        this._store.hydrate({books})
        console.log("store in service", this._store.books)
    }
}