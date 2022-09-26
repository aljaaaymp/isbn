import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import PageNotFound from "./PageNotFound";

function Searched() {
  const { bookIsbn } = useParams();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState([]);
  const [isbn13, setIsbn13] = useState();
  const [edition, setEdition] = useState();
  const [price, setPrice] = useState();
  const [isbn10, setIsbn10] = useState();
  const [publicationYear, setPublicationYear] = useState();
  const [publisher, setPublisher] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [isAuth, setIsAuth] = useState(false);

  const api = `http://localhost:8080/isbn/onebook/${bookIsbn}`;

  useEffect(() => {
    getBook();
  }, []);

  async function getBook() {
    axios
      .get(api)
      .then((result) => {
        const resp = result.data;
        setAuthor(resp.authorOfBooks);
        setEdition(resp.edition);
        setPrice(resp.price);
        setIsbn10(resp.isbn10);
        setPublicationYear(resp.publicationYear);
        setPublisher(resp.publisher.publisherName);
        setTitle(resp.title);
        setImageUrl(resp.imageUrl);
        setIsbn13(resp.isbn13);
      })
      .catch(() => {
        setIsAuth(true);
      });
  }

  return (
    <>
      <></>
      {isAuth ? (
        <PageNotFound />
      ) : (
        <>
          <div className="h-auto w-auto bg-white flex flex-col md:flex-row justify-start items-start px-20 py-20 border-b-2 md:py-40">
            <div className="h-auto w-1/2 flex flex-col gap-8">
              <span className="font-bold text-4xl"> Search Result </span>
              <span className="h-full w-full md:h-96 md:w-2/3 bg-white">
                <img className="h-full w-full" src={imageUrl} alt="imageUrl" />
              </span>
            </div>
            <div className="flex  flex-col py-20 font-bold ">
              <span className="text-2xl"> {title} </span>
              <span className="text-xl py-10">
                Author:
                <ol>
                  {author.map((author) => (
                    <p key={author.id}>
                      {author.firstName} {author.middleName} {author.lastName}
                    </p>
                  ))}
                </ol>
              </span>
              <span className="py-2"> Edition: {edition} </span>
              <span className="py-2"> Price: {price}</span>
              <span className="py-2"> ISBN10: {isbn10}</span>
              <span className="py-2"> ISBN13: {isbn13}</span>
              <span className="py-2"> Publication Year: {publicationYear}</span>
              <span className="py-2"> Publisher: {publisher} </span>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Searched;
