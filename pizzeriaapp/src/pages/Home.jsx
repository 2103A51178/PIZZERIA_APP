export default function Home() {
  return (
    <div className="container mt-4">

      {/* HERO SECTION */}
      <div className="text-center mb-5">
        <img
          src="https://thumb9.shutterstock.com/display_pic_with_logo/376831/127528958/stock-photo-delicious-italian-pizza-over-white-127528958.jpg"
          alt="Pizza Logo"
          style={{ width: "200px", cursor: "pointer" }}
        />
        <h1 className="mt-3">Welcome to Pizzaria 🍕</h1>
        <p className="text-muted">
          Freshly baked pizzas, custom ingredients, and delicious flavors made just for you.
        </p>
      </div>

      {/* ABOUT SECTION */}
      <div className="row mb-4">
        <div className="col-md-6">
          <img
            src="https://thumb7.shutterstock.com/display_pic_with_logo/259963/259963,1235208469,1/stock-photo-vegetables-bulgarian-pepper-on-a-white-background-isolated-25335661.jpg"
            className="img-fluid rounded"
            alt="Ingredients"
          />
        </div>
        <div className="col-md-6">
          <h3>Why Choose Our Pizzaria?</h3>
          <ul>
            <li>🍅 Fresh ingredients directly from farms</li>
            <li>🧀 Premium quality cheese</li>
            <li>🔥 Oven baked pizzas</li>
            <li>🧑‍🍳 Custom Build Your Pizza option</li>
            <li>🚀 Fast & easy online ordering</li>
          </ul>
        </div>
      </div>

      {/* FEATURES */}
      <div className="row text-center">
        <div className="col-md-4">
          <h4>🍕 Pizza Menu</h4>
          <p>
            Choose from a wide variety of veg and non-veg pizzas prepared by expert chefs.
          </p>
        </div>

        <div className="col-md-4">
          <h4>🛠 Build Your Pizza</h4>
          <p>
            Select your favorite ingredients and toppings and see the price update instantly.
          </p>
        </div>

        <div className="col-md-4">
          <h4>🛒 Smart Cart</h4>
          <p>
            Add, update quantity, remove items and see the total price in real time.
          </p>
        </div>
      </div>

    </div>
  );
}
