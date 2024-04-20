import React from "react";
import { Container } from "react-bootstrap";
import { PostArray } from "../../Assets/Data/data";
import NavBar from "../../Components/NavBar";
import ViewPost from "../../Components/ViewPostComponet";
import classes from "./landing.module.css";
function Landing() {
  return (
    <div className={classes._main}>
      <NavBar />
      <Container>
        <div className={classes.mainPage}>
          <div className={classes.midDiv}>
            {PostArray.map((ele) => (
              <ViewPost data={ele} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Landing;
