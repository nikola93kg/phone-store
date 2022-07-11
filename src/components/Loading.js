import loading from '../assets/img/loading.svg';
import './Loading.css'

function Loading() {
    return (
        <div className='loading'>
            <img src={loading} alt="loading..." />
        </div>
    )
}

export default Loading