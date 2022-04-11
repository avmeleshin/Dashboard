import './user.scss'
import userAva from '../../assets/img/userAva.png';

const User = () => {
    return (
        <div className="user">
            <a className="user__link" href="/">
                <img src={userAva} alt="User" className="user__ava"/>
            </a>
        </div>
    )
}

export default User;