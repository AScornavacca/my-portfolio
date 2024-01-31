import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import TrackVisibility from 'react-on-screen'



export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Develper", "SQL", "C++", "React"];
    const [text, setText] = useState(''); 
    const [delta, setDelta] = useState(200 - Math.random() * 100)
    const period = 300;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
            }, delta)
            return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if( isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500)
            }
        }
    
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline"> Welcome to my Portfolio </span>
            <h1>
              {"Hi I'm Alex Scornavacca"}
              <h2><span className="wrap">{text}</span></h2>
            </h1>
            <p>I am 24 years old and I started my studies in web development a year ago.
               I am a very curious person and I like to learn new technologies. I learned languages like C#, C++ and React in a self-taught way.
               I don't have experience yet but I'm eager to start my career in this field.</p>
             <a id="gh" href="https://github.com/AScornavacca" target={"_BLANK"}><button onClick={() => console.log("connect")} >My GitHub <ArrowRightCircle size={25} /></button></a>
          </Col>
          <Col  xs={12} md={6} xl={5}>
            <TrackVisibility>
            {({ isVisible}) =>
            <div className={isVisible ? "animate_animed animate_zoomIn" : ""}>
            <img src={headerImg} alt="Headder Img"/>
            </div>}
            </TrackVisibility>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};
