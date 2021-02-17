import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

import { Button, Modal } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
        height: 510
    },
    media: {
        height: 300,
    },
    modal: {
        position: 'absolute',
        maxWidth: 800,
        backgroundColor: "#FFF",
        alignItems: 'center',
        height: 610,
    },
    cardModal: {
      maxWidth: 645,
      boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
      backgroundColor: "#fafafa",
      height: 550,
      margin: '5%',
  },
   link: {
    position: 'absolute',
    textDecoration: 'none',
    marginTop: '15px',
   },
});

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const TopStory = ({ topstory }) => {
    const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.modal}>      
      <Card className={classes.cardModal} id={topstory.url}>
          <CardMedia className={classes.media} component="img" src={topstory.multimedia?.[0]?.url} alt="news-img" />
            <CardContent>
              <Typography id="modal-title" variant="h6" style={{margin: '10px 0 10px 0'}}>{topstory.title}</Typography>
              <Typography color="textSecondary" variant="subtitle2">
                {topstory.byline}
              </Typography>
              <Typography variant="body2" component="p">
                <br />
                  {topstory.abstract}
              </Typography>
               <Typography color="primary" variant="h6">
                 <a className={classes.link} href={topstory.url} target="_blank" rel="noreferrer" >
                    Go to News</a>
               </Typography>
            </CardContent>
      </Card>
      {/* <Modal /> */}
    </div>
  );
    return (
      <div className={classes.root} >
        {topstory && (
          <Card className={classes.card} id={topstory.url}>
            <CardMedia className={classes.media} component="img" src={topstory.multimedia?.[0]?.url} alt="news-img" />
              <CardContent>
                <Typography color="primary" variant="h6">              
                  <Button color="primary" onClick={handleOpen}>
                    {topstory.title}
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                  >
                    {body}
                  </Modal>
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                  {topstory.byline}
                </Typography>
                <Typography variant="body2" component="p">
                  <br />
                  {topstory.abstract}
                </Typography>
              </CardContent>
          </Card >
            )}
      </div>
    );
};
export default TopStory;
