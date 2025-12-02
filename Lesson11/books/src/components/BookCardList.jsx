import BookCard from './BookCard'
import BookCardInfo from "./BookCardInfo";

const BookCardList = () => {
    function showAlert(title) {
        alert(`This is book a about ${title}`);
    }
    return (
        <>
        <div className="container-* my-5 d-flex flex-wrap justify-content-center">
            {BookCardInfo.map((book) => (
                <BookCard key={book.id} book={book} showAlert={showAlert} />
            ))}
        </div>
        </>
    )
}

export default BookCardList
