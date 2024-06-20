import styles from "./styles.module.css";

const Home = () => {
  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Facebook</h1>
        <button className={styles.white_btn} onClick={handleLogOut}>
          Logout
        </button>
      </nav>
      <div className={styles.content}>
        <h2>Welcome to Facebook</h2>
        <p>Connect with friends and the world around you on Facebook.</p>
      </div>
    </div>
  );
};

export default Home;
