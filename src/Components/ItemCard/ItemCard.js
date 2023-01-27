import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ItemCard({ item, handleAddItem }) {
  return (
    <div>
      <Card
        style={{
          width: "200px",
          height: "280px",
          marginBottom: "10px",
        }}
      >
        <Card.Img
          variant="top"
          src={item.imageURL}
          style={{ height: "50%", objectFit: "contain" }}
        />
        <Card.Body>
          <Card.Title>
            {item.id} {item.name}
          </Card.Title>
          <Card.Text>Rs. {item.price}</Card.Text>
          <Button variant="primary" onClick={() => handleAddItem(item)}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemCard;
