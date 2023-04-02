import logo from "./../imgs/logo.svg";
import header_styles from "../css/header.module.css";
import "./../App.css";

const Header = ()=>{
    return(
        <div className="container">
            <header className={header_styles.header}>
                <div className={header_styles.logo}>
                    <a href="./../../public/index.html">
                        <img src = {logo} alt="Academ Work logo" className={header_styles.logo_img} />
                    </a>
                    <div className={header_styles.line}></div>
                    <span className={header_styles.logo_text}>
                        Сервис помощи студентам
                    </span>
                </div>
                <div className={header_styles.menu}>
                    <nav className={header_styles.nav} title="">
                        <div className={header_styles.nav_item}>
                            Услуги
                        </div>
                        <div className={header_styles.nav_item}>
                            О проекте
                        </div>
                        <div className={header_styles.nav_item}>
                            Эксперты
                        </div>
                        <div className={header_styles.nav_item}>
                            Отзывы
                        </div>
                        <div className={header_styles.nav_item}>
                            FAQ
                        </div>
                        <div className={header_styles.nav_item}>
                            Поддержка
                        </div>
                    </nav>
                    <div className={header_styles.nav_btn_container}>
                        <button className={header_styles.nav_btn}>
                            Личный кабинет
                        </button>
                    </div> 
                </div>
                
            </header>
        </div>
    );
}

export default Header;