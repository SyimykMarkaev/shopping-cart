import { Button } from "reactstrap";

export default function AsideTop() {
  return (
    <div className="right-top">
      <Button color="primary" size="sm">
        Got to checkout
      </Button>
      <div className="right">
        <span>Items (0)</span>
        <span>$0.0</span>
      </div>
      <div className="right">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <hr />
      <div className="right">
        <span>Total</span>
        <span>$0.0</span>
      </div>
    </div>
  );
}
