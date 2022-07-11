import { useGlobalContext } from "../store/context";
import './SearchBox.css'

function SearchBox() {

    const { handleSearchBox } = useGlobalContext();

    return (
        <div className="search-container">
            <input type="search" placeholder="search phones" onChange={handleSearchBox} />
        </div>
    )
}

export default SearchBox