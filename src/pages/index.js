import { getSide, books } from "../utils";
import { useContext } from "react";
import { MobxContext } from "./_app";
import BookCard from "../components/BookCard";
import { observer } from "mobx-react-lite";
import {BookService} from "@/services/book-service";

const IndexPage = () => {
  const {
    totalBooks,
    filteredBooks,
    setSearchParam,
    fetchAndSetBooksOnClient
  } = useContext(MobxContext);
  console.log("hello from Page component ", getSide());

  const handleOnInputChange = (e) => {
    setSearchParam(e.target.value);
  };

  return (
      <div>
        <h1>Books:</h1>
        <h3>TotalBooks: {totalBooks}</h3>
        <button onClick={fetchAndSetBooksOnClient}>Fetch on Client</button>
        <input placeholder="search" type="text" onChange={handleOnInputChange} />
        <hr />
        <div style={{ display: "flex" }}>
          {filteredBooks.map((book, index) => (
              <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
  );
};

export const getServerSideProps = async () => {
  console.log("making server request before app", getSide());
  // нашел только products, поэтому подогнал их атрибуты под Books
  const response = await fetch('https://dummyjson.com/products')
    const products =  await response.json()
    const booksTransform = products.products.map(p => ({
        id: p.id,
        title: p.title,
        release: '01.01.2024',
        image: p.thumbnail,
        author: 'authhor'
    }))
  return {
    props: {
      initialState: {
        booksStore: {
          books: booksTransform
        }
      }
    }
  };
};

export default observer(IndexPage);
