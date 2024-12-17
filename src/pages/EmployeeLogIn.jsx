import EmployeeLogInForm from "../components/EmployeeLoginForm";
import SideImage from "../components/SideImage";

import styles from "../styles/Account.module.css"

export default function EmployeeLogIn() {
    return (
        <>
            <div className={styles.body}>
                <div className={styles.form}>
                    <EmployeeLogInForm></EmployeeLogInForm>
                </div>
                <div className={styles.image}>
                    <SideImage></SideImage>
                </div>
            </div>
        </>
    )
  }
  