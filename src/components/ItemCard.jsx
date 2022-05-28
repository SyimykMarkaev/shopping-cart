import { useState } from "react";
import { Button } from "reactstrap";

export default function ItemCard({
  item: { id, title, desc, price, count, img }
}) {
  const handleQtyChange = () => {};

  return (
    <div className="card">
      <div className="card-top">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="description">
          <div>
            <strong>{title}</strong>
          </div>
          <div>{desc}</div>
          <div>
            <strong>{price}</strong>
          </div>
        </div>
        <div className="quantity">
          <input type="text" value={count} onChange={handleQtyChange} />
          <br />
          <Button color="secondary" size="sm">
            -
          </Button>
          <Button color="primary" size="sm">
            +
          </Button>
        </div>
      </div>
      <div className="card-bottom">
        <Button color="secondary" size="sm">
          Save for later
        </Button>
        <Button color="danger" size="sm">
          Remove
        </Button>
      </div>
    </div>
  );
}
