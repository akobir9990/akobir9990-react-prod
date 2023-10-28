function Admin() {
  return (
    <div className="container Admin-container">
      <h1 className="secretTitle">Admin</h1>
      <div className="newProduct">
        <input
          type="text"
          name=""
          id="itemName"
          // value={productName}
          // onChange={(e) => setProductName(e.target.value)}
          placeholder="Item name ..."
        />
        <br />
        <input
          type="text"
          name=""
          id="itemPrice"
          // value={productPrice}
          // onChange={(e) => setProductPrice(e.target.value)}
          placeholder="Item price ..."
        />
        <br />
        <select value="category">
          <option name="" id="">
            Молоко, сыр, яйцо
          </option>
          <option name="" id="">
            Хлеб
          </option>
          <option name="" id="">
            Фрукты и овощи
          </option>
          <option name="" id="">
            Замороженные продукты
          </option>
          <option name="" id="">
            Напитки
          </option>
          <option name="" id="">
            Кондитерские изделия
          </option>
          <option name="" id="">
            Чай, кофе
          </option>
          <option name="" id="">
            Бакалея
          </option>
          <option name="" id="">
            Здоровое питание
          </option>
          <option name="" id="">
            Зоотовары
          </option>
          <option name="" id="">
            Детское питание
          </option>
          <option name="" id="">
            Мясо, птица, колбаса
          </option>
          <option name="" id="">
            Непродовольственные товары
          </option>
        </select>
        <br />
        <button
          // onClick={addProduct}
          className="addProductBtn"
        >
          Add product
        </button>
      </div>
    </div>
  );
}

export default Admin;
