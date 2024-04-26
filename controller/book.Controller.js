import Book from "../model/book.Model.js";
export const getBook = async (req, resp) => {
  try {
    const book = await Book.find();
    resp.status(200).json(book);
  } catch (error) {
    console.error("Error retrieving books:", error);
    resp.status(500).json({ error: "Internal Server Error" });
  }
};
