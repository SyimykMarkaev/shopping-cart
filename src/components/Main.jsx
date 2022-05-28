import ItemCard from "./ItemCard";

export default function Main({ cartItems }) {
  console.log(cartItems);
  return (
    <main className="common">
      {cartItems.map((item) => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </main>
  );
}
