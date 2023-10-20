import React, { useEffect, useState } from "react";
import {
  Button,
  FileInput,
  Input,
  Rating,
  Select,
  Textarea,
} from "react-daisyui";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    brand_name: "default",
    type: "default",
    price: "",
    description: "",
    rating: 0,
  });

  const [brands, setBrands] = useState([]);
  const [img, setImg] = useState(null);

  useEffect(() => {
    if (
      product.image !== "" &&
      product.image !== null &&
      product.image !== undefined
    ) {
      fetch(import.meta.env.VITE_EXPRESS_API + "/products/add_product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      })
        .then((data) => data.json())
        .then((res) => {
          console.log(res);

          if (res.error) toast.error(res.message);
          else toast.success("Product added successfully");
        });
    }
  }, [product.image]);

  useEffect(() => {
    fetch(import.meta.env.VITE_EXPRESS_API + "/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  const uploadImage = () => {
    let form = new FormData();
    form.set("key", import.meta.env.VITE_IMGBB_KEY);
    form.append("image", img);

    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: form,
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct({
          ...product,
          name: product.name.trim(),
          price: product.price.trim(),
          image: data?.data.url,
        });
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    uploadImage();
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex w-auto flex-col shadow-lg rounded-box justify-center items-start p-2 py-4 md:px-20 lg:px-32 xl:px-48 mb-10"
      >
        <p className="text-3xl font-extrabold font-serif self-center mb-4">
          Add a product
        </p>

        <label htmlFor="product-name">Product Name</label>
        <Input
          id="product-name"
          placeholder="Name"
          type="text"
          value={product.name}
          required
          className="w-full max-w-sm mb-4"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />

        <label htmlFor="brand-name">Brand</label>
        <Select
          id="brand-name"
          size="lg"
          required
          bordered
          className="w-48 mb-4"
          value={product.brand_name}
          onChange={(event) =>
            setProduct({ ...product, brand_name: event.target.value })
          }
        >
          <option value={"default"} disabled>
            Pick a brand
          </option>
          {brands.length > 0 &&
            brands.map((brand, idx) => {
              return (
                <option key={idx} value={brand.brand_name}>
                  {brand.brand_name}
                </option>
              );
            })}
        </Select>

        <label htmlFor="product-type">Product Type</label>
        <Select
          id="product-type"
          size="lg"
          bordered
          required
          className="w-48 mb-4"
          value={product.type}
          onChange={(event) =>
            setProduct({ ...product, type: event.target.value })
          }
        >
          <option value={"default"} disabled>
            Pick a type
          </option>
          <option value={"Phone"}>Phone</option>
          <option value={"Laptop"}>Laptop</option>
          <option value={"Tablet"}>Tablet</option>
          <option value={"Cpu"}>Cpu</option>
          <option value={"Speaker"}>Speaker</option>
          <option value={"Camera"}>Camera</option>
        </Select>

        <label htmlFor="product-price">Price</label>
        <Input
          id="product-price"
          placeholder="Price"
          type="number"
          required
          className="w-full max-w-sm mb-4"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />

        <label htmlFor="product-rating">Rating</label>
        <Rating
          className="mb-4"
          value={product.rating}
          onChange={(value) => {
            setProduct({ ...product, rating: value });
          }}
        >
          <Rating.Item name="rating-1" className="mask mask-star" />
          <Rating.Item name="rating-1" className="mask mask-star" />
          <Rating.Item name="rating-1" className="mask mask-star" />
          <Rating.Item name="rating-1" className="mask mask-star" />
          <Rating.Item name="rating-1" className="mask mask-star" />
        </Rating>

        <div className="flex flex-col md:flex-row-reverse gap-4 mb-4">
          {img && (
            <img
              src={URL.createObjectURL(img)}
              alt="img"
              height={400}
              width={300}
              className="border-2"
            />
          )}

          <FileInput
            id="product-image"
            bordered
            required
            placeholder="Choose an image"
            className="w-72 md:w-full"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>

        <label htmlFor="product-description">Product Description</label>
        <Textarea
          id="product-description"
          value={product.description}
          required
          className="w-full max-w-sm mb-4"
          placeholder="Write a short description..."
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />

        <Button type="submit" color="success" className="self-center w-32">
          Upload
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
