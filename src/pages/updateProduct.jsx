import React, { useEffect, useState } from "react";
import {
  Button,
  FileInput,
  Input,
  Rating,
  Select,
  Textarea,
} from "react-daisyui";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";


const UpdateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    brand_name: "default",
    type: "default",
    price: "",
    description: "",
    rating: 0,
  });

  const params = useParams();

  const [brands, setBrands] = useState([]);
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    fetch(import.meta.env.VITE_EXPRESS_API + "/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);


  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(
      import.meta.env.VITE_EXPRESS_API +
        `/products/brand/product/${params.product}`,
      {
        method: "GET",
        signal: signal,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        setProduct(data);
      })
      .catch(e => {
        console.log(e)
      })

    return () => {
      controller.abort();
    };
  }, [params.brand, params.product]);

  useEffect(() => {
    if (
      product.image !== "" &&
      product.image !== null &&
      product.image !== undefined &&
      update
    ) {
      const controller = new AbortController();
      const signal = controller.signal;

      fetch(
        import.meta.env.VITE_EXPRESS_API +
          `/products/update/${product._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({...product, name:product.name.trim(), price: product.price.trim()}),
          signal: signal,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.error) toast.error(data.message);
          else toast.success("Product updated successfully");
          setUpdate(false);
        })
        .catch((e) => {
          console.log(e);
          setUpdate(false);
        });

      return () => {
        setUpdate(false);
        controller.abort();
      };
    }
  }, [update]);

  const uploadImage = () => {
    if (img === null) {
      setUpdate(true);
      return;
    }
    let form = new FormData();
    form.set("key", import.meta.env.VITE_IMGBB_KEY);
    form.append("image", img);

    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: form,
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct({ ...product, name:product.name.trim(), price:product.price.trim(), image: data?.data.url });
        setUpdate(true);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    uploadImage();
  };

  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <span className="loading loading-spinner text-accent"></span>
      </div>
    );

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-start gap-4"
      >
        <Input
          placeholder="Name"
          type="text"
          value={product.name}
          required
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />

        <Select
          size="lg"
          required
          bordered
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

        <Select
          size="lg"
          bordered
          required
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

        <Input
          placeholder="Price"
          type="number"
          required
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />

        <Textarea
          value={product.description}
          required
          placeholder="Write a short description..."
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />

        {img ? (
          <img
            src={URL.createObjectURL(img)}
            alt="img"
            height={300}
            width={200}
          />
        ) : (
          <img src={product.image} alt="img" height={300} width={200} />
        )}

        <FileInput bordered onChange={(e) => setImg(e.target.files[0])} />

        <Rating
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

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default UpdateProduct;
