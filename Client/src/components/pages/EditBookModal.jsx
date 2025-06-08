// components/EditBookModal.jsx
import React from "react";
import { Button } from "../ui/button";

const EditBookModal = ({
  isOpen,
  onClose,
  onSave,
  value,
  setValue,
  editingBook,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Edit Book Title</h2>
        <input
          type="text"
          className="w-full border rounded-lg p-2 mb-4"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <Button
            className="px-4 py-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            onClick={() =>
              editingBook && onSave(editingBook.id, editingBook.release_year)
            }
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditBookModal;
