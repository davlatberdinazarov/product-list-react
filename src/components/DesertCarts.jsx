import React from "react";
import data from "../data";

export default function DesertCarts() {
  return (
    <section className="cards-section">
      <h1>Deserts</h1>

      <main id="main" className="cards">
        {data.map((desert) => {
          return (
            <div className="card">
              <div className="img-container">
                <img
                  src={desert.image.desktop}
                  alt={desert.name}
                />
                <button className="add-btn">Add to cart</button>
              </div>
              <h5>{ desert.category }</h5>
              <h3>{ desert.name }</h3>
              <p>${ desert.price }</p>
            </div>
          );
        })}
      </main>
    </section>
  );
}
