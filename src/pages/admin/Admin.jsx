/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./admin.css";
import { uid } from "uid";

function Admin({
  user,
  productName,
  setProductName,
  productPrice,
  setProductPrice,
  productCategory,
  setProductCategory,
  setProducts,
  products,
}) {
  const id = uid();
  const addProduct = (name, price, category) => {
    const newProduct = {
      id: id,
      name,
      price,
      category,
    };
    if (name || price || category) {
      setProducts((p) => {
        localStorage.setItem("products", JSON.stringify([...p, newProduct]));
        return [...p, newProduct];
      });
      setProductName(() => "");
      setProductPrice(() => "");
      setProductCategory(() => "");
    }
  };

  const options = [
    {
      id: 1,
      name: "select",
    },
    {
      id: 2,
      name: "Молоко, сыр, яйцо",
    },
    {
      id: 3,
      name: "Хлеб",
    },
    {
      id: 4,
      name: "Фрукты и овощи",
    },
    {
      id: 5,
      name: "Замороженные продукты",
    },
    {
      id: 6,
      name: "Напитки",
    },
    {
      id: 7,
      name: "Кондитерские изделия",
    },
    {
      id: 8,
      name: "Чай, кофе",
    },
    {
      id: 9,
      name: "Бакалея",
    },
    {
      id: 10,
      name: "Здоровое питание",
    },
    {
      id: 11,
      name: "Зоотовары",
    },
    {
      id: 12,
      name: "Детское питание",
    },
    {
      id: 13,
      name: "Мясо, птица, колбаса",
    },
    {
      id: 14,
      name: "Непродовольственные товары",
    },
  ];

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  return (
    <div className="container admin-container">
      <h1 className="secretTitle">Salom {user}</h1>
      <div className="newProduct">
        <div className="name">
          <label htmlFor="itemName">Product name</label>
          <input
            type="text"
            name="itemName"
            id="itemName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Item name ..."
          />
        </div>
        <div className="price">
          <label htmlFor="itemPrice">Product price</label>
          <input
            type="text"
            name="itemPrice"
            id="itemPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Item price ..."
          />
        </div>
        <div className="selectOption">
          <label htmlFor="select">Product category</label>
          <select
            id="select"
            name="select"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          >
            {options.map((item) => (
              <option value={item.name} id={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <button
          className="addProductBtn"
          onClick={() => addProduct(productName, productPrice, productCategory)}
        >
          Add product
        </button>
      </div>
      <div className="prodManager">
        <h2 className="prodManagerTitle">all products</h2>
        {products.map((item, index) => {
          return (
            <div key={item.id} className="product">
              <div className="prodInfo">
                <div className="infoIndex">{index + 1}</div>
                <div className="infoName">{item.name}</div>
                <div className="infoPrice">{item.price}$</div>
                <div className="infoCategory">{item.category}</div>
              </div>
              <button
                className="delBtn"
                onClick={() =>
                  setProducts((products) =>
                    products.filter((prod) => prod.id !== item.id)
                  )
                }
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Admin;
