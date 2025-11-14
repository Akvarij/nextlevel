import { AppBar, Toolbar, Button, Box } from "@mui/material";
import styles from "./Navbar.module.css";
import "../../styles/variables.css";

const links = ["NEXT LEVEL PRISTOP", "STORITVE", "PAKETI", "ZNANJE"];

export default function Navbar() {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar disableGutters sx={{ py: 2 }}>
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            ml: "clamp(64px, 10vw, 140px)",
          }}
        >
          <div className="desktop-h3">nextlevel</div>
        </Box>

        {/* Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" }, // Responsive
            ml: "auto",
            gap: 4,
          }}
        >
          {links.map((item) => (
            <Button key={item} className={styles.navbarButton}>
              {item}
            </Button>
          ))}
        </Box>

        {/* Contact */}
        <Box sx={{ display: "flex", ml: "32px", mr: "122px" }}>
          <Button className={styles.contactButton} variant="contained">
            KONTAKT
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
