import React from "react";
import GitHub from "../../assets/icons/github";
import style from "./style.module.css";

const Footer = () => {
  return (
    <footer className={style.wrapper}>
      <a href="https://github.com/spbu-timetable" target="_blank" className={style.github + " " + style.link}>
        <GitHub /> &nbsp; Посмотреть на GitHub
      </a>
    </footer>
  );
};

export default Footer;
