import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const result = await fetch("http://127.0.0.1:8000/api/books/");
      const data = await result.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <></>;
}

export default App;
