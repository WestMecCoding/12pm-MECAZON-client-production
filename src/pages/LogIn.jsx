import LoginForm from "../components/LoginForm";
import SideImage from "../components/SideImage";

import styles from "../styles/Account.module.css"

export default function Account() {
    return (
        <>
            <div className={styles.body}>
                <div className={styles.form}>
                    <LoginForm ></LoginForm>
                </div>
                <div className={styles.image}>
                    <SideImage></SideImage>
                </div>
            </div>
        </>
    )
  }
  