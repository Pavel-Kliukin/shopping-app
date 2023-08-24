import CustomNavbar from "./CustomNavbar";
import classes from "./Homepage.module.css";

const Homepage = () => {
  
  
  return (
    <div className={classes.homepage}>
      <CustomNavbar />
      <div className={classes.main}>
        <div className={classes.welcomeBox}>
          <h1>Welcome to our fake shop</h1>
        </div>
      </div>
    </div>
  )
}

export default Homepage;