import React, { useEffect, useState } from "react";
import ViewBooks from "./ViewBooks";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Home = () => {
  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState(0);
  const [books, setBooks] = useState([]);

  const addBook = async () => {
    const bookData = {
      title,
      release_year: releaseYear,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
      const data = await response.json()
      setBooks((prev) => [...prev, data])
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const result = await fetch("http://127.0.0.1:8000/api/books/");
      const data = await result.json();
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
          📚 Book Management System
        </h1>

        {/* Book Form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Book Title (e.g., Rich Dad Poor Dad)"
            className="rounded-xl px-4 py-3 shadow-sm border border-gray-300"
          />
          <Input
            type="number"
            onChange={(e) => setReleaseYear(e.target.value)}
            placeholder="Release Year (e.g., 1999)"
            className="rounded-xl px-4 py-3 shadow-sm border border-gray-300"
          />
          <Button
            onClick={addBook}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-3 rounded-xl shadow-sm transition-all"
          >
            ➕ Add Book
          </Button>
        </div>

        {/* Book Viewer */}
        <ViewBooks books={books} />
      </div>
    </div>
  );
};

export default Home;
