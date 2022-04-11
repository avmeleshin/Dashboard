import './button.scss'

const Button = ({link, label, clazz}) => {
    return (
        <a className={`btn ${clazz}`} href={link}>{label}</a>
    )
}

export default Button;