

import { Col, Container, Row, Tab, Nav} from "react-bootstrap"
import { ProjectCard } from "./ProjectsCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import taskexample from "../assets/img/taskexample.png"
import pokemonApp from "../assets/img/pokemonApp.png"
import  projImg3 from "../assets/img/project-img3.png"
import myPortfolio from "../assets/img/myPortfolio.png"


export const Projects = () =>{

    const projects = [
        {
         title: "Pokemon App",
         description: "Desing & Development",
         imgUrl: taskexample,
        },
        {
            title: "Add & Delete",
            description: "Desing & Development",
            imgUrl: pokemonApp,
           },
           {
            title: "My Portfolio",
            description: "Desing & Development",
            imgUrl: myPortfolio,
           },
          
        ];
return(
<section className="project" id="project">
    <Container>
        <Row>
            <Col>
            <h2>Projects</h2>
            <p>these are the projects I carried out as internships</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
            <Nav.Item>
                <Nav.Link eventKey="first">Tab one</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="second">Tab one</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="third">
               Tab three
                </Nav.Link>
            </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            projects.map((project, index) => {
                                return(
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                        }
                    </Row>

                </Tab.Pane>
                
            </Tab.Content>
            </Tab.Container>
            </Col>
        </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2}></img>
</section>
)
}