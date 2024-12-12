import BookCard from "@/components/book-card"
import BookForm from "@/components/book-form"
import { Book } from "@/data"

export default async function Home() {
  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://your-deployed-domain.vercel.app"; // Replace with your production domain

  const res = await fetch(`${baseURL}/api/books`);
  const books: Book[] = await res.json();
  console.log(books);

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
