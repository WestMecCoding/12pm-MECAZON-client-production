import SignUpForm from "../components/SignUpForm";
import SideImage from "../components/SideImage";
import styles from "../styles/Account.module.css"

export default function App() {
    return (
         <>
            <div className={styles.body}>
                <div className={styles.form}>
                    <SignUpForm></SignUpForm>
                </div>
            <div className={styles.image}>
                    <SideImage></SideImage>
                </div>
            </div>
        </>
    );
  }
  