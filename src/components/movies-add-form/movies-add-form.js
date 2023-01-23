import "./movies-add-form.css";
const MoviesAddForm = () => {
  return (
    <div className="add-form">
      <h3>Yangi Kino Qushish</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Qanday Kino?"
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Nechchi marotaba kurilgan?"
        />
        <button type="submit" className="btn btn-outline-dark">
          Qo'shish
        </button>
      </form>
    </div>
  );
};
export default MoviesAddForm;
