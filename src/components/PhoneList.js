import SinglePhone from './SinglePhone';
import Loading from './Loading.js'
import { useGlobalContext } from '../store/context';

function PhoneList() {

    const { isLoading, filteredPhones } = useGlobalContext();

    if (isLoading) {
        return <Loading />
    }
    if (filteredPhones.length < 1) {
        return <h2 className='error-title'>No data from the server</h2>
    }

    return (
        <section>
            {filteredPhones.map(data => {
                return <SinglePhone key={data.brand_id} {...data} />
            })}
        </section>
    )
}

export default PhoneList