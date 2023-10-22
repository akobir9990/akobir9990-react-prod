import "./Admin.css";

function Admin(
  lsItem,
  setLsItem,
  productName,
  setProductName,
  productPrice,
  setProductPrice
) {
  return (
    <div className="adminContainer">
      <h1 className="title">Add product</h1>
      <div>
        <label htmlFor="productName">Product name</label>
        <input
          type="text"
          name="productName"
          id="productName"
          placeholder="product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <br />
        <label htmlFor="productPrice">Product price</label>
        <input
          type="text"
          name="productPrice"
          id="productPrice"
          placeholder="Product price ..."
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <br />
        <button>add product</button>
      </div>
    </div>
  );
}

export default Admin;
