import Product from "@/models/Product";
import connectToDB from "@/utils/database";

export async function GET() {
  try {
    await connectToDB();

    const products = await Product.find();

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all products", { status: 500 });
  }
}

export async function POST(req) {
  const body = await req.json();

  const newProduct = new Product(body);
  try {
    await connectToDB();
    await newProduct.save();

    return new Response("Product has been created", { status: 201 });
  } catch (error) {
    return new Response("Failed to create product", { status: 500 });
  }
}
