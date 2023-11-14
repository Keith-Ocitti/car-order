import searchIcon from "../../../public/Search.svg";
import bell from "../../../public/bell.png";
import styles from "./Search.module.css";
import Image from "next/image";

const Search = () => {
  return (
    <div className="page-content" >
    <div className={styles.searchSection}>
      <Image src={bell} alt="bell Icon" />
      <div className={styles.searchComponents}>
        <div>
          <input
            type="text"
            placeholder="Search here"
            className={styles.searchField}
          />
        </div>
        <div className={styles.searchIcon}>
          <Image src={searchIcon} alt="search Icon" className={styles.logo} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Search;