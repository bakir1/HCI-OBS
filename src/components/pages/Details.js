import React, { Component } from "react";
import { InfoConsumer } from "../context";

class About extends Component {
  render() {
    return (
      <InfoConsumer>
        {(data) => {
          const {
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            img,
            title,
            maps,
            description,
          } = data.detailInfo;

          return (
            <React.Fragment>
              <div className="conteiner-fluid.align-items-center">
                <h1 className="display-1 font-wight-bold">{headerTitle}</h1>
                <h4 className="display-5">{headerSubTitle}</h4>
              </div>
            </React.Fragment>
          );
        }}
      </InfoConsumer>
    );
  }
}

export default About;
