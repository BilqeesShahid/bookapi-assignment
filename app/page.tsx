import BookCard from "@/components/book-card"
import BookForm from "@/components/book-form"
import { Book } from "@/data"

export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
  
  try {
    const res = await fetch(`${apiUrl}/api/books`);
    if (!res.ok) {
      throw new Error(`Failed to fetch books: ${res.statusText}`);
    }
    const books: Book[] = await res.json();

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
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching books:", error);
      return <div>Error loading books: {error.message}</div>;
    } else {
      console.error("Unexpected error:", error);
      return <div>Error loading books: An unexpected error occurred.</div>;
    }
  }
}
