import React, { FC, useState } from "react";
import { storage, db } from "../../firebase/utils";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import "./AddProductPage.scss";
import { IAddProductPage } from "./models";

const AddProductPage: FC<IAddProductPage> = () => {
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [productImage, setProductImage] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const typesImg = ["image/png", "image/jpeg"];

  const handleProductImage = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target) {
      let selectedFile: File = (target.files as FileList)[0];

      if (selectedFile && typesImg.includes(selectedFile.type)) {
        setProductImage(selectedFile);
        setError("");
      } else {
        setProductImage(null);
        setError("Please choose picture in png or jpeg format");
      }
    }
  };

  const addProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const uploadProuct = storage
      .ref(`images/${productImage.name}`)
      .put(productImage);
    uploadProuct.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (err) => {
        setError(err.message);
      },
      () => {
        storage
          .ref("images")
          .child(productImage.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("Products")
              .add({
                ProductName: productName,
                ProductPrice: Number(productPrice),
                ProductImage: url,
              })
              .then(() => {
                setProductName("");
                setProductPrice("");
                setProductImage(null);
                setError("");
              })
              .catch((err) => setError(err.message));
          });
      }
    );
  };

  return (
    <Layout>
      <div className="add-product">
        <div className="form-container">
          <h2 className="add-product__tite">Add Products</h2>
          <form onSubmit={addProduct} className="add-product__form">
            <FormInput
              type="text"
              name="product-name"
              value={productName}
              label="Product Name"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setProductName(e.target.value)
              }
            />
            <FormInput
              type="number"
              name="product-price"
              value={productPrice}
              label="Product Price"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setProductPrice(e.target.value)
              }
            />
            <FormInput
              type="file"
              name="product-image"
              label="Product Image"
              handleFile={(e: React.FormEvent<HTMLInputElement>) =>
                handleProductImage(e)
              }
            />
            <Button>Add Product</Button>
          </form>
          {error && <span>{error}</span>}
        </div>
      </div>
    </Layout>
  );
};

export default AddProductPage;
