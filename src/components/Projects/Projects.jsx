import Astro from "../../image/Astro-Gamer.png";
import tectonic from "../../image/tectonic.png";
import alma from "../../image/alma.png";
import osha from "../../image/osha.png";
import xpowertrade from "../../image/xpowertrade.png";

import styles from "./Project.module.css";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <div className={styles.projectContainer}>
        <h2 id="portfolio" className={styles.titlePortfolio}>
          P O R T F O L I O
        <hr className={styles.linea} />
        </h2>
        <div className={styles.projects}>
        <h3 className={styles.title}>TECTONIC</h3>
        <a
          href="https://www.ajtectonic.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tectonic} className={styles.img} alt="not found" />
        </a>
        <div className={styles.iconsContainer}>
      
            <a href="https://www.ajtectonic.com/"  target="_blank">https://www.ajtectonic.com</a>
        
        </div>
      </div>
      <div className={styles.projects}>
        <h3 className={styles.title}>ALMA MAGNETICA</h3>
        <a
          href="https://almamagnetica.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={alma} className={styles.img} alt="not found" />
        </a>
        <div className={styles.iconsContainer}>
     
            <a href="https://almamagnetica.com/"  target="_blank"> https://almamagnetica.com</a>
        </div>
      </div>
        <div className={styles.projects}>
          <h3 >X Power Trade</h3>
          <a
            href="https://x-power-trade.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={xpowertrade} className={styles.img} alt="not found" />
          </a>
          <div className={styles.iconsContainer}>
        
              <a href="https://x-power-trade.vercel.app/"  target="_blank">https://x-power-trade.vercel.app</a>
          </div>
        </div>
      <div className={styles.projects}>
        <h3 className={styles.title}>OSHA | NUEVA YORK</h3>
        <a href="https://newyorkosha.net" target="_blank" rel="noreferrer">
          <img src={osha} className={styles.img} alt="not found" />
        </a>
        <div className={styles.iconsContainer}>
          <a
            href="https://github.com/Ariel-Alegre/OSHA-NEW-YORK"
            target="_blank"
            rel="noreferrer"
          >
           
            <a href="https://www.newyorkosha.net/"  target="_blank">https://www.newyorkosha.net</a>
          </a>
        </div>
      </div>
      <div className={styles.projects}>
        <h3 className={styles.title}>Astro Gamer</h3>
        <a
          href="https://astro-gamer.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Astro} className={styles.img} alt="not found" />
        </a>
        <div className={styles.iconsContainer}>
          <a
            href="https://github.com/Ariel-Alegre/Astro-Gamer"
            target="_blank"
            rel="noreferrer"
          >
            <a href="https://astro-gamer.vercel.app/"  target="_blank"> https://astro-gamer.vercel.app/</a>
          </a>
        </div>
      </div>

    </div>
  );
};

export default Projects;
