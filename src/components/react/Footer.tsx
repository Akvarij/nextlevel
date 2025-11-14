import { Box, Container } from "@mui/material";
import styles from "./Footer.module.css";
import "../../styles/variables.css";

const marketingSolutions = [
  "Strategic Services",
  "Web Infrastructure",
  "Visual Services",
  "Digital Marketing",
  "Business Automation and Optimization",
];

const companyLinks = [
  "About us",
  "Portfolio",
  "Testimonials",
  "Blog",
  "Contact",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="lg" className={styles.container}>
        <Box className={styles.content}>
          <div className="desktop-h2">nextlevel</div>
          {/* Left Section - Brand and Contact */}
          <Box className={styles.leftSection}>
            <Box className={styles.address}>
              <div>Adress</div>
              <div>Adress</div>
              <div>Adress</div>
            </Box>
            <div className={styles.email}>hello@nextlevelagency.com</div>
          </Box>

          {/* Middle Section - Marketing Solutions */}
          <Box className={styles.middleSection}>
            <div className={styles.sectionHeading}>Marketing solutions</div>
            <Box className={styles.linkList}>
              {marketingSolutions.map((item, index) => (
                <div key={index} className={styles.linkItem}>
                  {item}
                </div>
              ))}
            </Box>
          </Box>

          {/* Right Section - Company */}
          <Box className={styles.rightSection}>
            <div className={styles.sectionHeading}>Company</div>
            <Box className={styles.linkList}>
              {companyLinks.map((item, index) => (
                <div key={index} className={styles.linkItem}>
                  {item}
                </div>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Bottom Section - Copyright and Legal */}
        <Box className={styles.bottomSection}>
          <div className={styles.copyright}>
            All rights reserved 2025 © Nextlevel Agency
          </div>
          <div className={styles.legalLinks}>Privacy Policy / Terms of Use</div>
        </Box>
      </Container>
    </footer>
  );
}
