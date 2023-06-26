import styles from "./navbar.module.css";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { ButtonStyled } from "./styles";
function Navbar() {
  const isMobile = useMediaQuery("(max-width:700px)");
  return (
    <>
      <Box className={styles.navbar}>
        <Link to="/" className={styles.link}>
          {isMobile ? (
            <Typography variant="h5" className={styles["logo-title"]}>
              Dish Creator
            </Typography>
          ) : (
            <Typography variant="h3" className={styles["logo-title"]}>
              Dish Creator
            </Typography>
          )}
        </Link>
        <Link to="about" className={styles.link}>
          <ButtonStyled variant="outlined">
            <Typography variant="body1" className={styles["about-text"]}>
              nothing
            </Typography>
          </ButtonStyled>
        </Link>

        <hr className={styles.hrLine} />
      </Box>
      {/* Backgorund image visible on every page */}
      <Box
        className={styles["Box-background"]}
        component="img"
        alt="Table with dishes"
        src="https://i.ibb.co/2jnjWfR/dish-background.jpg"
      />
    </>
  );
}

export default Navbar;
