import express, { Request, Response } from "express";
import { Book } from "../models/book";

const router = express.Router();

router.get("/books", async (req: Request, res: Response) => {
  const allBooks = await Book.find();
  res.send(allBooks);
});

router.get("/books/:id", async (req: Request, res: Response) => {
  const book = await Book.findById(req.params.id);
  if (book) {
    book.id = req.params.id;
    return res.send(book);
  }
  return res.status(404).send("Book not found");
});

router.post("/books", async (req: Request, res: Response) => {
  const { author_id, name, genre, price } = req.body;
  const book = new Book({ author_id, name, genre, price });
  try {
    const newBook = await book.save();
    res.send(newBook);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

router.put("/books/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const targetBook = await Book.findById(id);
    if (!targetBook) {
      return res.status(404).send("Book not found");
    }
    const { author_id, name, genre, price } = req.body;

    const updatedBook = { author_id, name, genre, price };
    await Book.updateOne({ _id: id }, updatedBook);

    res.send(updatedBook);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export { router as bookRouter };
