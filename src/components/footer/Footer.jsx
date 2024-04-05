import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>ĐỒNG HÀNH CÙNG TRẢI NGHIỆM CỦA BẠN</div>
      <div className={styles.text}>
        Liên hệ với chúng tôi ngay để nhận được ưu đãi sớm nhất.
      </div>
    </div>
  );
};

export default Footer;
