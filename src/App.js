import "./App.css";
import Cart from "./components/List";

function App() {
  return (
    <div className="card-container">
      <Cart
        cardType="Free"
        price="0"
        users="Single User"
        storage="5GB Storage"
        privateProject={false}
        support={false}
        domain={false}
        report={false}
      />
      <Cart
        cardType="Plus"
        price="9"
        users="5 Users"
        storage="50GB Storage"
        privateProject={true}
        support={true}
        domain={true}
        report={false}
      />
      <Cart
        cardType="Pro"
        price="49"
        users="Unlimited Users"
        storage="150GB Storage"
        privateProject={true}
        support={true}
        domain="Unlimited"
        report={true}
      />
    </div>
  );
}

export default App;
