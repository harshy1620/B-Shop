import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
        {/* card section */}
        {data.map((book, index) => (
          <div key={index} className="group w-[300px]">
            <Link to={`/details/${book.id}`}>
              <div data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="relative">
                  <img
                    src={book?.volumeInfo?.imageLinks?.thumbnail}
                    alt=""
                    className="h-[180px] w-[260px] object-cover rounded-md"
                  />
                </div>
                <div className="leading-7">
                  <h2 className="font-semibold">{book?.volumeInfo?.title}</h2>
                  <h2 className="font-semibold">
                    {book?.volumeInfo?.publishedDate}
                  </h2>
                  <h2 className="font-bold">
                    Author: {book?.volumeInfo?.authors.join(", ")}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
