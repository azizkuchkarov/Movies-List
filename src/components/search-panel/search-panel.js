import "./search-panel.css";
const SearchPanel = () => {
  return (
    <div>
      <input
        type="text"
        className="form-control search-input"
        placeholder="Kinolarni qidirish...."
      ></input>
    </div>
  );
};

export default SearchPanel;
