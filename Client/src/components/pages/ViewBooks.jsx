import { useEffect, useState } from "react";

const ViewBooks = ({books}) => {

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">
        📚 Books Collection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {book.title}
            </h3>
            <p className="text-gray-600">
              📅 Release Year:{" "}
              <span className="font-medium text-gray-700">
                {book.release_year}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewBooks;
