import React from "react";
import { createRequest } from "../../utils/api";
import { BookAttrs } from "../../../shared/models/book";
import { GetServerSideProps } from "next";
import Router from "next/router";

export const getServerSideProps: GetServerSideProps<{
  data: BookAttrs;
}> = async ({ params }) => {
  const { id } = params;

  const client = createRequest();
  const { data } = await client.get(`books/${id}`);
  return { props: { data } };
};

export default function Book({ data }: { data: BookAttrs }) {
  const [name, setName] = React.useState(data.name);
  const [genre, setGenre] = React.useState(data.genre);
  const [price, setPrice] = React.useState(data.price);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleGenreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenre(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedBook = {
      name,
      genre,
      price,
    };

    const client = createRequest();
    try {
      await client.put(`books/${data.id}`, updatedBook);
      Router.push("/");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="block">
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="border border-black"
          />
        </label>
        <br />
        <label className="block">
          Genre:
          <input
            type="text"
            value={genre}
            onChange={handleGenreChange}
            className="border border-black"
          />
        </label>
        <br />
        <label className="block">
          Price:
          <input
            type="text"
            value={price}
            onChange={handlePriceChange}
            className="border border-black"
          />
        </label>
        <br />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
}
