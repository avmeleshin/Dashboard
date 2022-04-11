import Logo from "../logo/Logo";
import Button from "../button/Button";
import User from "../user/User";

import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header__wrapper">
                <Logo />
                <Button link="/" label="Help" clazz="_help" />
                <Button link="/" label="upgrade" clazz="_upgrade" />
                <User />
            </div>
        </div>
    )
}

export default Header;
