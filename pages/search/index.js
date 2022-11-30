import Head from "next/head";
import { useSearch } from "./useSearch";
import styles from "../../styles/search.module.css";

const Search = () => {
  const { onChangeSearchValue, onClickSearch } = useSearch();
  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <div className={styles.search}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search Facebook"
            onChange={onChangeSearchValue}
          ></input>
          <input type="submit" onClick={onClickSearch} value="Search"></input>
        </div>
      </div>
    </>
  );
};
export default Search;
