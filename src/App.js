
import Card from "./Card";
import { products } from "./productsData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main className="container">
        {products.map((product) => (
          <Card {...product} />
        ))}
      </main>
      <section className="container">
        <div className="block-listing">
          <span className="badge-1">Random 1</span>
          <span className="badge-2">Random 2</span>
          <span className="badge-3">Random 3</span>
          <span className="badge-4">Random 4</span>
        </div>
        <div className="banner"></div>
      </section>
    </div>
  );
}

export default App;
