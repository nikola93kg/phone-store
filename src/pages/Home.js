import PhoneList from '../components/PhoneList';
import SearchBox from '../components/SearchBox';
import './Home.css'

function Home() {

    return (
        <section className='home-section'>
            <h1>Find phone</h1>
            <SearchBox />
            <PhoneList />
        </section>
    )
}

export default Home