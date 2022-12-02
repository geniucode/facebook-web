import Head from "next/head";
import { Auth } from "../../components/auth";
import { useSearch } from "./useSearch";
import styles from "../../styles/search.module.css";

const Search = () => {
  const { error, onChangeSearchValue, onClickSearch } = useSearch();
  return (
    <>
      <Auth>
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
          {error && <p className={styles.errorMsg}>{error}</p>}
        </div>
      </Auth>
    </>
  );
};
export default Search;
