import { useDispatch, useSelector } from "react-redux";
import css from "./SeachBox.module.css";
import { changeTextFilter, selectTextFilter } from "../../redux/filtersSlice";

export function SearchBox() {
  const value = useSelector(selectTextFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.searchDiv}>
      <p className={css.searchText}>Find contacts by name</p>
      <input
        className={css.searchBar}
        type="text"
        value={value}
        onChange={(e) => dispatch(changeTextFilter(e.target.value))}
        autoComplete="off"
      />
    </div>
  );
}
