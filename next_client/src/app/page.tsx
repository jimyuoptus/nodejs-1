import Image from "next/image";
import Link from "next/link";
import { BookAttrs } from "../../../shared/models/book";
import { ObjectId } from "mongoose";
import { Suspense } from "react";
import Loading from "./loading";
// import { GetServerSideProps } from "next";
// import { createRequest } from "@/utils/api";

// export const getServerSideProps = (async () => {
//   const client = createRequest();
//   const { data } = await client.get("books");
//   return { props: { data } };
// }) satisfies GetServerSideProps<{ data: [BookAttrs] }>;

const getBooks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch("http://localhost:3001/books");
  const data = await response.json();

  return data?.map((book: BookAttrs) => (
    <div
      key={book.id as unknown as string}
      className="border p-4 bg-gray-200 text-black"
    >
      <p>{book.name}</p>
      <p>{book.genre}</p>
      <p>{book.price}</p>
      <p className="py-8">
        <Link
          href={`/edit/${book.id}`}
          className="text-blue-500 hover:underline"
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Edit
          </button>
        </Link>
      </p>
    </div>
  ));
};

export default async function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">All Books List Updated</h1>
        <Suspense fallback={Loading()}>
          <div className="grid grid-cols-3 gap-4">{getBooks()}</div>
        </Suspense>
      </div>
    </div>
  );
}
