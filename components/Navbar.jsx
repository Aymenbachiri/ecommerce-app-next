"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "/public/shopping-bag.png";
import { signOut, useSession } from "next-auth/react";
import { VscSignOut, VscSignIn } from "react-icons/vsc";
import { TiShoppingCart } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/redux-toolkit/shopSlice";

export default function Navbar() {
  const session = useSession();
  const cart = useSelector((state) => state.shop.products);
  const dispatch = useDispatch();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed p-4 top-0 mb-4 w-full h-20 shadow-xl z-20 bg-gray-200 ease-in-out duration-300">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src={logo} alt="/" width={50} height={50} />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/products">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Products
              </li>
            </Link>
            <Link href="/sell">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Sell My Product
              </li>
            </Link>
            <Link className="flex items-center gap-1 relative" href="/cart">
              <li className="ml-10 text-sm uppercase">Cart</li>
              <div className="absolute w-4 h-4 rounded-full z-10 right-[-3px] top-[-10px] flex items-center justify-center text-[10px] text-white bg-red-600">
                {cart.length}
              </div>
              <TiShoppingCart size={20} />
            </Link>
            <Link href="/dashboard">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Dashboard
              </li>
            </Link>
            {session.status === "authenticated" && (
              <Link href="/dashboard">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  <div className="flex items-center gap-1">
                    <FaUserCircle size={20} />
                    <h1>{session.data.user.name} </h1>
                  </div>
                </li>
              </Link>
            )}
            {session.status === "unauthenticated" && (
              <Link className="flex items-center gap-1 ml-10" href="/login">
                <VscSignIn size={20} />
                <li className=" text-sm uppercase hover:border-b">Login</li>
              </Link>
            )}
            {session.status === "authenticated" && (
              <li className="ml-10 text-sm uppercase hover:border-b">
                <button
                  className="flex items-center gap-2"
                  onClick={() => {
                    signOut();
                    dispatch(clearCart());
                  }}
                >
                  Logout
                  <VscSignOut size={20} />
                </button>
              </li>
            )}
          </ul>
          <div className="flex items-center gap-4">
            {session.status === "authenticated" && (
              <Link
                href="/dashboard"
                className="md:hidden flex items-center gap-1"
              >
                <FaUserCircle size={20} />
                <h1>{session.data.user.name} </h1>
              </Link>
            )}
            <Link
              className="md:hidden flex items-center gap-1 relative"
              href="/cart"
            >
              <li className="ml-10 text-sm uppercase ">Cart</li>
              <div className="absolute w-4 h-4 rounded-full z-10 right-[-3px] top-[-10px] flex items-center justify-center text-[10px] text-white bg-red-600">
                {cart.length}
              </div>
              <TiShoppingCart size={20} />
            </Link>
            <div onClick={handleNav} className="md:hidden cursor-pointer">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-200 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-200 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={logo} width={50} height={50} alt="logo" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[95%] md:w-[90%] py-4">
                Our products are designed to inspire you to live your best life
                and pursue your passions
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/products">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Products
                </li>
              </Link>
              <Link href="/dashboard">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Dashboard
                </li>
              </Link>
              <Link href="/sell">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Sell My Product
                </li>
              </Link>
              {session.status === "unauthenticated" && (
                <Link className="flex items-center gap-1" href="/login">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Login
                  </li>
                  <VscSignIn size={20} />
                </Link>
              )}
              {session.status === "authenticated" && (
                <li className="py-4 text-sm flex items-center gap-1">
                  <button
                    className="flex items-center gap-2 uppercase"
                    onClick={signOut}
                  >
                    Logout
                    <VscSignOut size={20} />
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
