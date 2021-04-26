import React, { useState } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./menuresult.css";
import r1 from "./r1.jpg";
import r2 from "./r2.jpg";
import r3 from "./r3.jpg";
import r5 from "./r5.jpg";
import r6 from "./r6.jpg";
import r7 from "./r7.jpg";
import TCard from "./Tcard";
import $ from "jquery";
import { Link, useHistory } from "react-router-dom";

function SResult(props) {
  const [detq, setDetq] = useState({
    item_name: "",
    price: "",
    avail: "",
    pic: ""
  });
  let history = useHistory();

  const ok = () => {
    console.log("ok");
    var v = document.getElementById("tc1").innerHTML;
    var a = $(v).find(".card-body2").text();
    var b = $(v).find(".price2").text();
    var c = $(v).find(".avlb2").text();
    var d = $(v).find(".card-header2 img").attr("src");
    setDetq({ ...detq, item_name: a, price: b, avail: c, pic: d });

    if (detq.item_name.length > 0) {
      history.push({
        pathname: "/Resultpage",
        state: detq
      });
    }
  };
  const ok2 = () => {
    console.log("ok2");
    var v2 = document.getElementById("tc2").innerHTML;
    var a2 = $(v2).find(".card-body2").text();
    var b2 = $(v2).find(".price2").text();
    var c2 = $(v2).find(".avlb2").text();
    var d2 = $(v2).find(".card-header2 img").attr("src");
    setDetq({ ...detq, item_name: a2, price: b2, avail: c2, pic: d2 });
    console.log(detq);

    if (detq.item_name.length > 0) {
      history.push({
        pathname: "/Resultpage",
        state: detq
      });
    }
  };
  const ok3 = () => {
    console.log("ok3");
    var v3 = document.getElementById("tc3").innerHTML;
    var a3 = $(v3).find(".card-body2").text();
    var b3 = $(v3).find(".price2").text();
    var c3 = $(v3).find(".avlb2").text();
    var d3 = $(v3).find(".card-header2 img").attr("src");
    setDetq({ ...detq, item_name: a3, price: b3, avail: c3, pic: d3 });
    console.log(detq);
    console.log(d3);
  };
  const ok4 = () => {
    console.log("ok4");
    var v4 = document.getElementById("tc4").innerHTML;
    var a4 = $(v4).find(".card-body2").text();
    var b4 = $(v4).find(".price2").text();
    var c4 = $(v4).find(".avlb2").text();
    var d4 = $(v4).find(".card-header2 img").attr("src");
    setDetq({ ...detq, item_name: a4, price: b4, avail: c4, pic: d4 });
    console.log(detq);

    if (detq.item_name.length > 0) {
      history.push({
        pathname: "/Resultpage",
        state: detq
      });
    }
  };
  return (
    <>
      <div class="Result">
        <Container fluid="md" style={{ marginTop: "1.5cm" }}>
          <Row className="xd">
            <Col className="xd">
              <div
                className="t1"
                id="tc1"
                onClick={ok}
                style={{ marginLeft: "-3cm" }}
              >
                <TCard
                  name={props.item_name}
                  price={props.price}
                  pic={props.image}
                  ratings={props.rating}
                  avlb={props.avl}
                />
              </div>
            </Col>
            <Col className="xd">
              <div
                className="t1"
                id="tc2"
                onClick={ok2}
                style={{ marginLeft: "3.5cm" }}
              >
                <TCard
                  name={props.item_name2}
                  price={props.price2}
                  pic={props.image2}
                  ratings={props.rating2}
                  avlb={props.avl2}
                />
              </div>
            </Col>
            <Col className="xd">
              <div onClick={ok3} id="tc3" style={{ marginLeft: "6.5cm" }}>
                <TCard
                  name={props.item_name3}
                  price={props.price3}
                  pic={props.image3}
                  ratings={props.rating3}
                  avlb={props.avl3}
                />
              </div>
            </Col>
            <Col className="xd">
              {" "}
              <div onClick={ok4} id="tc4" style={{ marginLeft: "6cm" }}>
                <TCard
                  name={props.item_name4}
                  price={props.price4}
                  pic={props.image4}
                  ratings={props.rating4}
                  avlb={props.avl4}
                />
              </div>
            </Col>
          </Row>
          <Row className="xd" style={{ marginTop: "10cm" }}>
            <Col className="xd">
              <div className="t1" style={{ marginLeft: "-3cm" }}>
                <TCard
                  name={props.item_name5}
                  price={props.price5}
                  pic={props.image5}
                  ratings={props.rating5}
                  avlb={props.avl5}
                />
              </div>
            </Col>
            <Col className="xd">
              <div className="t1" style={{ marginLeft: "3.5cm" }}>
                <TCard
                  name={props.item_name6}
                  price={props.price6}
                  pic={props.image6}
                  ratings={props.rating6}
                  avlb={props.avl6}
                />
              </div>
            </Col>
            <Col className="xd">
              <div style={{ marginLeft: "6.5cm" }}>
                <TCard
                  name={props.item_name7}
                  price={props.price7}
                  pic={props.image7}
                  ratings={props.rating7}
                  avlb={props.avl7}
                />
              </div>
            </Col>
            <Col className="xd">
              {" "}
              <div style={{ marginLeft: "6.0cm" }}>
                <TCard
                  name={props.item_name8}
                  price={props.price8}
                  pic={props.image8}
                  ratings={props.rating8}
                  avlb={props.avl8}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SResult;
