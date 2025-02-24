import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
    return (
        <div className={styles.login__container}>
            <div className={styles.login__tablet}>
                {window.innerWidth > 1200 ? (
                    <img src="/assets/desktop-frame.svg" alt="framedesktop"/>
                ) : (
                    <img src="/assets/tablet-frame.svg" alt="frametablet"/>
                )}

                <h3 style={{ fontWeight: "bold", fontSize: "40px" }}>Personal Finance</h3>
                <div className={styles.firstelipse}></div>
                
            </div>
            <div className={styles.login__desktop}>
                <LoginForm/>
            </div>
        </div>
    );
};

export default LoginPage;
