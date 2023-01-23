import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import "./app.css";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";

const App = () => {
  const data = [
    { name: "Empire of Osman", viewers: 300 },
    { name: "Ertugrul", viewers: 350 },
    { name: "Eshli Young", viewers: 302 },
  ];
  return (
    <div className="App font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieList data={data} />
        <MoviesAddForm />
      </div>
    </div>
  );
};

export default App;
