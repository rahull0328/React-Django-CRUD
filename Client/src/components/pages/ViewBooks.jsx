import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";
import EditBookModal from "./EditBookModal";

const ViewBooks = ({ books }) => {
  const [bookList, setBookList] = useState(books);
  const [editingBook, setEditingBook] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    setBookList(books)
  }, [books])

  const openEditModal = (book) => {
    setEditingBook(book);
    setNewTitle(book.title);
  };

  const closeModal = () => {
    setEditingBook(null);
    setNewTitle("");
  };

  const updateBook = async (pk, release_year) => {
    const bookData = {
      title: newTitle,
      release_year,
    };

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}/`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(bookData),
      });

      const data = await response.json();
      setBookList((prev) =>
        prev.map((books) => {
          if (books.id === pk) {
            return data;
          } else {
            return books;
          }
        })
      );

      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-b from-indigo-50 to-white min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-700 tracking-wide">
        📚 Book Collection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookList.map((book, index) => (
          <div
            key={book.id}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all p-6 relative border border-gray-200"
          >
            <h3 className="text-xl sm:mt-1a font-semibold mt-6 text-indigo-800 mb-2">
              {book.title}
            </h3>
            <p className="text-gray-600">
              📅 <span className="font-medium">Release Year:</span>{" "}
              {book.release_year}
            </p>
            <Button
              className="absolute top-4 right-2 text-indigo-600 hover:bg-indigo-600 hover:text-white bg-white border border-indigo-100 shadow-sm"
              onClick={() => openEditModal(book)}
            >
              <Pencil size={14} />
            </Button>
          </div>
        ))}
      </div>

      {/* Modal Component */}
      <EditBookModal
        isOpen={!!editingBook}
        onClose={closeModal}
        onSave={updateBook}
        editingBook={editingBook}
        value={newTitle}
        setValue={setNewTitle}
      />
    </div>
  );
};

export default ViewBooks;
