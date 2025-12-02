import "./BookCard.css";

export const BookCard = ({ book, showAlert }) => {
    const { title, description, image } = book;

    return (
        <div className="card m-3 book-card" style={{ width: "18rem" }}>
            <img src={image} className="book-image" alt={title} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title book-title">{title}</h5>
                <p className="card-text book-description">{description}</p>
                <button className="btn btn-primary mt-auto" onClick={() => showAlert(title)}>
                    More Info
                </button>
            </div>
        </div>
    );
};

export default BookCard
