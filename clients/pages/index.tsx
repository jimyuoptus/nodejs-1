import React from "react";
import { createRequest } from "../utils/api";
import { BookAttrs } from "../../shared/models/book";
import { GetServerSideProps } from "next";
import Link from "next/link";

export const getServerSideProps = (async () => {
  const client = createRequest();
  const { data } = await client.get("books");
  return { props: { data } };
}) satisfies GetServerSideProps<{ data: [BookAttrs] }>;

const Index = ({ data }: { data: [BookAttrs] }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">All Books List Updated</h1>
        <div className="grid grid-cols-3 gap-4">
          {data?.map((book: BookAttrs) => (
            <div key={book.id} className="border p-4">
              <p>{book.name}</p>
              <p>{book.genre}</p>
              <p>{book.price}</p>
              <p>
                <Link
                  href={`/edit/${book.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
