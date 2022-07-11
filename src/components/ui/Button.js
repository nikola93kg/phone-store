import './Button.css'

function Button({ type, children, handleClick }) {

    const btnClass = `button ${type}`

    return (
        <button className={btnClass} onClick={handleClick}>{children}</button>
    )
}

export default Button