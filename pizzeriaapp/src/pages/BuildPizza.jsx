import { useEffect, useState } from "react";
import axios from "axios";

export default function BuildPizza() {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [total, setTotal] = useState(0);

  
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/ingredients")
      .then(res => setIngredients(res.data))
      .catch(err => console.log(err));
  }, []);

  
  const handleChange = (ingredient) => {
    const exists = selectedIngredients.find(i => i.id === ingredient.id);

    if (exists) {
      // remove ingredien
      setSelectedIngredients(
        selectedIngredients.filter(i => i.id !== ingredient.id)
      );
      setTotal(total - ingredient.price);
    } else {
      // add ingredient
      setSelectedIngredients([...selectedIngredients, ingredient]);
      setTotal(total + ingredient.price);
    }
  };

  return (
    <div className="container mt-4">
      <div
        className="mx-auto p-3 shadow rounded"style={{ maxWidth: "800px" }}>
        <h3 className="text-center mb-4">🍕 Build Your Pizza</h3>

        <table className="table table-bordered text-center align-middle table-dark">
          <thead className="table-dark">
            <tr>
              <th>Select</th>
              <th>Image</th>
              <th>Ingredient</th>
              <th>Price (₹)</th>
            </tr>
          </thead>

          <tbody>
            {ingredients.length === 0 ? (
              <tr>
                <td colSpan="4">No ingredients found</td>
              </tr>
            ) : (
              ingredients.map(ing => (
                <tr key={ing.id}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={() => handleChange(ing)}
                    />
                  </td>

                  <td>
                    <img
                      src={ing.image}
                      alt={ing.tname}
                      width="60"
                      height="60"
                      style={{ objectFit: "cover" }}
                    />
                  </td>

                  <td>{ing.tname}</td>
                  <td>{ing.price}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        
        <div className="text-end mt-3">
          <h4>
            Total Price:{" "}
            <span className="text-success">₹{total}</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
