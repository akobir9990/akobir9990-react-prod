function ProductItem() {
  return (
    <div>
      <div className="item">
        <div className="img">img</div>
        <div className="price">price</div>
        <span className="name">name</span>
        <div className="rank">ranking with stars</div>
        <button className="addToBasket">В корзину</button>
      </div>
    </div>
  );
}

export default ProductItem;
