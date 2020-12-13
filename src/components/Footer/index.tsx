import IconButton from "@material-ui/core/IconButton";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import React from "react";
import style from "./style.module.css";

const Footer = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.filler}></div>

      <div>
        <IconButton className={style.help_btn} onClick={handleOpen}>
          ?
        </IconButton>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={style.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: {
            backgroundColor: "rgba(0,0,0,0)",
          },
        }}
      >
        <Fade in={open}>
          <Paper className={style.paper}>
            <Typography>
              Разработано в рамках учебной практики студентами факультета ПМ-ПУ. Краткую инструкцию и наши
              контакты вы можете найти в репозитории на{" "}
              <MuiLink color="primary" href="https://github.com/inctnce/timetable-generator" target="_blank">
                Github
              </MuiLink>
            </Typography>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
};

export default Footer;
