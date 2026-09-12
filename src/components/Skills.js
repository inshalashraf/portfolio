import { Col, Container, Row } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    }

    const skills = [
        [meter1, "Python"],
        [meter3, "Java"],
        [meter2, "C / C++"],
        [meter2, "Data Structures & Algorithms"],
        [meter2, "Web Development"]
    ]

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>
                                My current focus is software development and data science, with hands-on
                                practice through academic and personal projects.
                            </p>

                            <Carousel responsive={responsive} infinite className="skill-slider">
                                {skills.map(([image, name]) => (
                                    <div className="item" key={name}>
                                        <img src={image} alt="" aria-hidden="true" />
                                        <h5>{name}</h5>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" aria-hidden="true" />
        </section>
    )
}
