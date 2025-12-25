import { useParams, useNavigate } from "react-router-dom";
import facts from "../data/facts";

function Details() {
  const { factId } = useParams();
  const fact = facts.find((f) => f.id === Number(factId));
  const navigate = useNavigate();

  if (!fact) {
    return <h2 className="text-danger mt-4">Fact not found</h2>;
  }

  return (
    <div className="container mt-4">
      <div className="mb-3 text-start">
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          &larr; Back
        </button>
      </div>

      <h2>
        Fact #{fact.id}: {fact.title}
      </h2>
      <p>{fact.text}</p>
      <img
        src={fact.image}
        alt={fact.title}
        style={{ width: "600px", height: "auto" }}
      />
    </div>
  );
}

export default Details;
