"use client";

// import { login } from "@/lib/action";
import styles from "./contactform.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";

const Contactform = () => {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Họ và tên" name="username" />
      <input type="text" placeholder="Số điện thoại liên hệ" name="phonenumber" />
      <button style={{display: 'inline-block',
                       padding: '16px 20px',
                       width: '200px',
                        borderRadius: '5rem', 
                        textAlign: 'center', 
                        fontWeight: 'bold',
                         fontSize: '20px',
                         alignSelf: 'center',
                          justifyItems:'center'}}>Đặt lịch</button>
      {/* {state?.error} */}
      {/* <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link> */}
    </form>
  );
};

export default Contactform;