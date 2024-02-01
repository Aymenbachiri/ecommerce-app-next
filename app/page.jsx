import Image from "next/image";
import shopping from "/public/undraw_Window_shopping_re_0kbm.png";

export default function Home() {
  return (
    <div className="p-8 md:flex md:items-center sm:flex-col md:flex-row gap-24 mt-10">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="text-5xl font-bold">Shop with ease, shop with us!</h1>
        <h1 className="text-5xl font-bold">easy-to-find products.</h1>
        <p className="text-xl font-normal">
          Your one-stop online destination for all your shopping needs. Discover
          a wide range of products and enjoy a seamless shopping experience from
          the comfort of your home.
        </p>
      </div>
      <Image src={shopping} alt="cooking" />
    </div>
  );
}
