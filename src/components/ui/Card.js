import './Card.css'

function Card({ image, alt, children }) {


    return (
        <div className="card">
            {image &&
                <figure className="image">
                    <img src={image} alt={alt} />
                </figure>
            }
            <div className="card-content">
                <div className="content">
                    {children}
                </div>

            </div>
        </div>
    )
}

export default Card