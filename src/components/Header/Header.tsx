import React, {FC} from 'react';
import styles from './Header.module.scss';
import logoImg from './../../assets/headerLogo.png';

const Header: FC = () => {
    return (
        <div className={styles.header}>
            <img src={logoImg} className={styles.headerLogoImg} alt={'Logo'} />
            starig-aviasales
        </div>
    )
}

export default Header;