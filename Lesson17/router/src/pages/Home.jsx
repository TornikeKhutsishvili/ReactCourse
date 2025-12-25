import { Link } from "react-router-dom";
import facts from "../data/facts";

function Home() {
  return (
    <div className="container-lg mt-5">
      <div className="row align-items-start">
        {/* Batman */}
        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
          <h1 className="mb-3">Batman</h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "250px" }}
            alt="Batman"
          />
        </div>

        {/* Facts */}
        <div className="col-12 col-lg-6">
          <h3 className="mb-3 text-center text-lg-start">Facts</h3>

          <ul className="list-group">
            {facts.map((fact) => (
              <li
                key={fact.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <strong>{fact.title}</strong>

                <Link to={`/${fact.id}`} className="btn btn-sm btn-primary">
                  View
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
