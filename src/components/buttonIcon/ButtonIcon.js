import './buttonIcon.scss';

const ButtonIcon = ({type}) => {
    return (
        <a className={`btn-icon _${type}`} href="/"> </a>
    )
}

export default ButtonIcon;