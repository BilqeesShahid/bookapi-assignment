import BookCard from "@/components/book-card"
import BookForm from "@/components/book-form"
import { Book } from "@/data"

export default async function Home() {
  const baseURL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const res = await fetch(`${baseURL}/api/books`);
  const rawData = await res.text(); // Use .text() to read raw response
  console.log("Raw API Response:", rawData);

  let books: Book[] = [];
  try {
    books = JSON.parse(rawData); // Convert response to JSON
  } catch (error) {
    console.error("Failed to parse JSON:", error);
  }

  return (
    <div className="container mx-auto">
      <BookForm />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            author={book.author}
            title={book.title}
            imgUrl={book.imgUrl}
          />
        ))}
      </div>
    </div>
  );
}
