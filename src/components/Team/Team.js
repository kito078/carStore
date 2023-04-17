import React from "react";
import "./Team.css";
import { ImInsertTemplate, ImLocation2 } from "react-icons/im";
import {
  Button,
  Row,
  Col,
  Card,
  CardText,
  CardTitle,
  CardBody,
} from "reactstrap";
import teamData from "./teamData";

function Feature2() {
  return (
    <div className="feature2 pb-5">
      <Row className="mt-5">
        {teamData.map((item) => {
          return (
            <Col lg>
              <Card
                className="feature2__card text-center"
                body
                inverse
                style={{
                  backgroundColor: "#fff",
                  borderColor: "#fff ",
                }}
              >
                <div className="feature__image text-ceter mb-4">
                  <img src={item.img} alt="" />
                </div>
                <h3 className="feature__title mt-4">{item.title}</h3>
                <p className="team__desc mt-4">{item.desc}</p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Feature2;
