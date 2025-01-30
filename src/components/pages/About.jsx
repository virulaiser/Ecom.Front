import "./About.css";
import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoGithub,
  BiLogoDiscordAlt,
  BiLogoLinkedinSquare,
  BiLogoCss3,
  BiLogoNodejs,
} from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { RxVercelLogo } from "react-icons/rx";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiSupabase,
} from "react-icons/si";
import { BsTrello, BsFillArrowDownCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import BackToTop from "../partials/BackToTop";
import axios from "axios";
import { useState } from "react";
import ModalAbout from "../partials/ModalAbout";

function About() {
  const navigate = useNavigate();
  const [modalAbout, setModalAbout] = useState(false);
  const [person, setPerson] = useState(null);
  const team = [
    {
      name: "Alejo González",
      age: 23,
      image: "/imgs/profile-alejo.jpg",
      title: "BA in Communication | Illustrator | Full Stack Dev.",
      linkedin:
        "https://www.linkedin.com/in/alejo-gonzalez-gentile/?locale=en_US",
      github: "https://github.com/AlejoGonzalez99/",
      resume:
        "BA in Communication at Universidad ORT Uruguay, Full Stack Developer Jr. formed at Hack Academy and independent illustrator. Experience as a journalistic producer, podcast scripter and web designer in pojects for brands such as Itaú Bank, Club Atlético Aguada, Asociación Española and El País newspaper.",
    },
    {
      name: "Rodrigo Beiro",
      age: 25,
      image: "/imgs/profile-rodrigo.png",
      title: "Accountant | Full Stack Dev.",
      linkedin: "https://www.linkedin.com/in/rodrigo-beiro/",
      github: "https://github.com/rodrigobeiro-31",
      resume:
        "Bachelor's degree in Accounting from Universidad Católica del Uruguay, Full Stack Developer Jr. certified by Hack Academy, and experience as a tax analyst at KPMG, specializing in tax-related matters. Previous accounting roles involved accounting activities at Granja Pocha.",
    },
    {
      name: "Kathia Olaverry",
      age: 24,
      image:
        "https://mcbzesritumxqjtbullp.supabase.co/storage/v1/object/public/profile_images/photo_Kathia.jpeg",
      title: "Nutritionist | Full Stack Dev",
      linkedin: "https://www.linkedin.com/in/kathia-olaverry/",
      github: "https://github.com/Kathia01",
      resume:
        "I'm a nutritionist turned full stack developer. I'm currently living in Montevideo and I'm very excited to start my new journey in the world of programming. This change has allowed me to put into practice my versatility and ability to adapt to new challenges.",
    },
    {
      name: "José Ignacio Siutto",
      age: 44,
      image: "/imgs/profile-jose.jpg",
      title: "Full Stack Dev.",
      linkedin: "https://www.linkedin.com/in/josé-ignacio-siutto",
      github: "https://github.com/virulaiser",
      resume:
        "With more than two decades of experience in the world of Agronomy and Animal Production, I have had the privilege of working in the department of Florida, where I developed a solid track record in the management and improvement of agricultural activities. My passion for agriculture and agribusiness has led me to constantly grow in my responsibilities, and I am committed to innovation and efficiency in this field.My path in the agricultural world led me to explore new frontiers, and in parallel to my career, I decided to enter the fascinating world of technology. I have studied Robotics and IoT technologies, Artificial Intelligence (AI) and Full Stack development. This fusion of knowledge has allowed me to unite two exciting worlds: agriculture and technology.",
    },
    {
      name: "Leandro Matosas",
      age: 27,
      image: "/imgs/profile-lea.png",
      title: "Full Stack Dev.",
      linkedin: "https://www.linkedin.com/in/leandro-matosas/",
      github: "https://github.com/leandromatc",
      resume:
        "Hello! I'm Leandro, thanks for all your support and contribution!",
    },
  ];

  /*  const handleDatabase = () => {
    const response = axios({
      method: "patch",
      url: `${import.meta.env.VITE_API_URL}/database`,
    });
    navigate("/");
  }; */
  return (
    <div>
      <div className={modalAbout ? "bg-blur" : ""}>
        <div className="about-bg-img container-fluid d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-white text-center title">ABOUT THIS PROJECT</h2>
          <h3 className="mt-5 pt-5 fw-bold text-center slide-down">
            Slide down <BsFillArrowDownCircleFill />
          </h3>
          <div className="about-gd-overlay"></div>
        </div>
        <div className="container-fluid">
          <section className="about-section-two justify-content-center align-items-center my-5 row">
            <div className="d-flex flex-column justify-content-center align-items-center mb-4">
              <h3 className="text-center mb-5 contact-title">Our team</h3>
              <span className="line-span"></span>
            </div>
            {team.map((person) => (
              <div
                key={person.name}
                className="col d-flex flex-column justify-content-center align-items-center text-center my-3"
              >
                <img
                  src={person.image}
                  alt=""
                  className="team-img"
                  onClick={() => {
                    setPerson(person);
                    setModalAbout(true);
                  }}
                />
                <h5 className="mt-3 contact-text text-uppercase fw-bold">
                  {person.name}
                </h5>
                <small>{person.title}</small>
                <div>
                  <Link to={person.linkedin} target="_blank">
                    <BiLogoLinkedinSquare className="social-icons me-2" />
                  </Link>
                  <Link to={person.github} target="_blank">
                    <BiLogoGithub className="social-icons" />
                  </Link>
                </div>
              </div>
            ))}
          </section>
          <section className="about-section-one justify-content-center align-items-center row">
            <div className="d-flex flex-column justfiy-content-center align-items-center mb-2 col-lg-8 col-md-10 col-12 p-5 ">
              <p className="main-about-text">
                The current webpage was built as a final course project for the
                Full Stack Developing Bootcamp by Hack Academy in September
                2023. It is the result of more than 120 hours of coding,
                decision making and designing as a team. Everything from its
                functionalities and structure to the brand identity and product
                selection was created from scratch.{" "}
              </p>
              <h3 className="mb-5 fw-bold contact-title">Organization</h3>
              <span className="line-span"></span>
              <p className="contact-text about-text">
                Working in a team of five with a three-week deadline demanded us
                to develop a well-organized system to avoid wasting time and
                generating conflicts in the code. Even though we worked most of
                the time simultaneously on a Discord channel, we used Trello as
                a platform where each team member could assign itself tasks and
                see what the others were working on.
              </p>
              <p className="contact-text about-text">
                We structured the code in three Github repositories for the
                Backend, the Admin Frontend, and the User Frontend codes. We
                then determined a series of goals for each one of the three
                weeks:
              </p>
              <ul className="about-text">
                <li>
                  First week: setting up the models and seeders for the site’s
                  database, structuring the views for each page, defining key
                  style elements for the brand, and connecting routes.
                </li>
                <li>
                  Second week: programming the admin page with CRUD
                  functionalities for users, orders, and products, defining
                  authentication and authorization functions, creating a working
                  Cart.
                </li>
                <li>
                  Third week: Finishing touches and deploying the database and
                  site.
                </li>
              </ul>
              <p className="mb-5 contact-text about-text">
                Both working together and individually, we divided tasks
                considering all team member’s strengths and weaknesses as well
                as the learning opportunities that appeared throughout the
                process.
              </p>
              <h3 className="my-5 fw-bold contact-title text-center">
                Brand identity
              </h3>
              <span className="line-span"></span>
              <img
                className="my-5 about-brand-img"
                src="/imgs/doppios-main-logo.png"
                alt="Doppio's Logo"
              />
              <p className="contact-text about-text">
                After inclining ourselves for a cafe and bakery business, most
                style decisions were made as a team. We researched the Uruguayan
                and foreign markets, searched for inspirations, and identify
                mistakes in regards of developing an attractive and original
                brand.
              </p>
              <p className="mb-5 contact-text about-text">
                Both the visual identity and name of Doppio’s Cafe & Bakery was
                created to quickly identify the purpose of the store. The
                cartoonish logo combined with a focus on the products imagery
                and a brown color palette, inspires a classic yet trendy feel to
                the webpage.{" "}
              </p>
              <h3 className="my-5 fw-bold contact-title">
                Technologies and tools
              </h3>
              <span className="line-span"></span>
              <p className="contact-text about-text">
                This site was developed using the React library for JavaScript
                as well as Node.js, Redux and elements of vanilla HTML and CSS.
                Other Node libraries were used for specific purposes such as
                Express, Formidable, Dotenv, Bcrypt, React Bootstrap, among
                others.
              </p>
              <p className="contact-text about-text">
                The data for this e-commerce was stored in MongoDB considering
                the advantages of employing a non-relational database for this
                project. We made this decision valuing the flexibility of this
                type of database, which makes them easier to adjust or make
                changes. It also presented some advantages when using MongoDB
                Atlas, since it was a faster a simpler way of storing data in
                the cloud. Multimedia elements such as images and icons were
                stored using Supabase.
              </p>
              <p className="contact-text about-text">
                The brand logo and icons were designed with Procreate and Adobe
                Illustrator. Adobe Photoshop was used for editing the products
                images as well as fixing and adjusting other elements when
                creating the visual identity of Doppio’s.
              </p>
              <p className="contact-text about-text">
                Tools and programs such as Discord, Trello and Excalidraw were
                used for organizing and holding group working sessions
                throughout the process.
              </p>
              <div className="d-flex gap-5 justify-content-center align-self-center flex-wrap m-0">
                <div className="tech-icon">
                  <BiLogoJavascript className="icon" />
                  <small>JavaScript</small>
                </div>
                <div className="tech-icon">
                  <FaBootstrap className="icon" />
                  <small>Bootstrap</small>
                </div>
                <div className="tech-icon">
                  <BiLogoMongodb className="icon" />
                  <small>MongoDB</small>
                </div>
                <div className="tech-icon">
                  <BiLogoReact className="icon" />
                  <small>React</small>
                </div>
                <div className="tech-icon">
                  <BiLogoGithub className="icon" />
                  <small>GitHub</small>
                </div>
                <div className="tech-icon">
                  <BiLogoDiscordAlt className="icon" />
                  <small>Discord</small>
                </div>
                <div className="tech-icon">
                  <BsTrello className="icon" />
                  <small>Trello</small>
                </div>
                <div className="tech-icon">
                  <BiLogoCss3 className="icon" />
                  <small>CSS3</small>
                </div>
                <div className="tech-icon">
                  <BiLogoNodejs className="icon" />
                  <small>Nodejs</small>
                </div>
                <div className="tech-icon">
                  <SiSupabase className="icon" />
                  <small>Supabase</small>
                </div>
                <div className="tech-icon">
                  <RxVercelLogo className="icon" />
                  <small>Vercel</small>
                </div>
                <div className="tech-icon">
                  <SiAdobephotoshop className="icon" />
                  <small>Photoshop</small>
                </div>
                <div className="tech-icon">
                  <SiAdobeillustrator className="icon" />
                  <small>Illustrator</small>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h2 className="contact-title">BACK-END WEB</h2>
              <span className="line-span"></span>
              <Link to="https://ecom-back-nine.vercel.app">
                <img
                  src={`${
                    import.meta.env.VITE_URL_SUPABASE
                  }/storage/v1/object/public/resources/about-1.avif`}
                  alt=""
                  className="about-img"
                />
              </Link>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
              <h2 className="contact-title">ADMIN WEB</h2>
              <span className="line-span"></span>
              <Link
                to="https://ecom-admin-psi-seven.vercel.app"
                target=" _blank"
              >
                <img
                  src={`${
                    import.meta.env.VITE_URL_SUPABASE
                  }/storage/v1/object/public/resources/about-2.avif`}
                  alt=""
                  className="about-img"
                />
              </Link>
              <p className="mt-3">Click the image to go to the Admin web!</p>
            </div>
          </section>
          <section className="about-section-two justify-content-center align-items-center my-5 row">
            <div className="d-flex flex-column justfiy-content-center  mb-2 col-lg-8 col-md-10 col-12 p-5 ">
              <h3 className="mb-5 fw-bold contact-title">DISCLAIMER</h3>
              <span className="line-span"></span>
              <p className="about-text">
                Every image used in this site is license free and was taken both
                from Unsplash and Freepik websites, except for the brand logo
                which was created originally by the team.
              </p>
              <p className="about-text">
                Doppio’s Coffee & Bakery is a fictional brand created for the
                solely purpose of this project. So are the contact information
                and places mentioned at any time.
              </p>
              <p className="about-text">
                Any similarities with real brands or people are merely
                coincidental.
              </p>
              <p className="about-text">
                This page serves no commercial purposes.
              </p>
              <p className="text-end about-text">September 2023.</p>
              <p className="text-end about-text">Montevideo, Uruguay.</p>
            </div>
          </section>
        </div>
        <BackToTop />
      </div>
      <ModalAbout
        setModalAbout={setModalAbout}
        modalAbout={modalAbout}
        person={person}
      />
    </div>
  );
}

export default About;
