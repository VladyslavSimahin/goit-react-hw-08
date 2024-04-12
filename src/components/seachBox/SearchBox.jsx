import { useDispatch, useSelector } from "react-redux";
import css from "./SeachBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";

export function SearchBox() {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.searchDiv}>
      <p className={css.searchText}>Find contacts by name</p>
      <input
        className={css.searchBar}
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        autoComplete="off"
      />
    </div>
  );
}
