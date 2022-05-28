import { Button } from "reactstrap";

export default function AsideBottom() {
  return (
    <div className="right-bottom">
      <h6>Saved Items</h6>
      <ul>
        <li className="saved-item">
          <span>Title</span>
          <span>$200</span>
          <div className="saved-item-actions">
            <Button color="primary">Add back</Button>
            <Button color="danger">Remove</Button>
          </div>
        </li>
      </ul>
    </div>
  );
}
