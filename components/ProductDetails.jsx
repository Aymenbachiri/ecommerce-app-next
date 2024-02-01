"use client";

import { addToCart } from "@/redux-toolkit/shopSlice";
import { LiaStoreAltSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";

export default function ProductDetails({
  id,
  title,
  category,
  price,
  oldprice,
  description,
  imageurl,
  rating,
  creator,
}) {
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={imageurl}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: id,
                        title: title,
                        description: description,
                        category: category,
                        imageurl: imageurl,
                        oldprice: oldprice,
                        price: price,
                        rating: rating,
                        creator: creator,
                        quantity: 1,
                      })
                    )
                  }
                  className="w-full bg-[#ec413d] dark:bg-red-600 text-white py-2 px-4 rounded-full font-bold hover:bg-red-600 dark:hover:bg-gray-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {title}
            </h2>
            <p className="text-black dark:text-gray-300 text-3xl uppercase mb-4">
              {category}
            </p>
            <div className="flex mb-4">
              <div className="mr-4 flex gap-2">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  ${price}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  In Stock
                </span>
              </div>
              <div className="flex items-center gap-2 ml-8">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Rating:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {rating}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Available Color:
              </span>
              <div className="flex items-center mt-2">
                <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Available Size:
              </span>
              <div className="flex items-center mt-2">
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  S
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  M
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  L
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XL
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XXL
                </button>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {description}
              </p>
            </div>
            <div className="mt-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Store:
              </span>
              <p className="text-black flex items-center gap-2 dark:text-gray-300 text-sm mt-2">
                <LiaStoreAltSolid color="#ec413d" size={30} />
                <span className="text-2xl uppercase underline">
                  {" "}
                  {creator}{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
