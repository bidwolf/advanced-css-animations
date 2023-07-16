import React, { useState } from "react";
import "@styles/_home.scss";
import Card, { ITechCardProps } from "../../components/Card";
import { ReactComponent as ReactIcon } from "@assets/react.svg";
import { ReactComponent as SassIcon } from "@assets/sass.svg";
import { ReactComponent as NodeJSIcon } from "@assets/nodejs.svg";
import { ReactComponent as TypescriptIcon } from "@assets/typescript.svg";
import { ReactComponent as HtmlIcon } from "@assets/html.svg";
import { ReactComponent as CssIcon } from "@assets/css.svg";
import { ReactComponent as JavascriptIcon } from "@assets/javascript.svg";
import { ReactComponent as GitIcon } from "@assets/git.svg";
import { ReactComponent as CsharpIcon } from "@assets/csharp.svg";
import { ReactComponent as GithubIcon } from "@assets/github.svg";
import { ReactComponent as MailIcon } from "@assets/mail.svg";
import { ReactComponent as LinkedinIcon } from "@assets/linkedin.svg";

const techs: ITechCardProps[] = [
  {
    description:
      "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
    documentationUrl: "https://sass-lang.com/documentation/",
    techName: "Sass",
    Icon: <SassIcon />,
  },
  {
    description:
      "React is a JavaScript library for creating user interfaces. Also, it is he most popular JavaScript front-end framework in use today. It's used by both established companies and new startups.",
    documentationUrl: "https://react.dev/learn",
    techName: "React",
    Icon: <ReactIcon />,
  },
  {
    description:
      "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser. Node.js is a popular, lightweight web framework for beginners, and it is used by many big companies like Netflix and Uber.",
    documentationUrl: "https://nodejs.org/en/docs",
    techName: "Node",
    Icon: <NodeJSIcon />,
  },
];
export function Home() {
    const [isSidebarVisible,setToggleSidebarVisibility]=useState(true);
  return (
    <div className="home-container">
      <aside className={`sidebar ${isSidebarVisible?"":"hidden"}`}>
        <div 
        className="right-arrow"
        onClick={()=>setToggleSidebarVisibility(prev=>!prev)}
        />
        <h2 className="sidebar-title">About me</h2>
        <div className="sidebar-profile"/>
        <p>
          Hi! My name is <strong>Henrique Rodrigues</strong>, i have 22 years old and i'm Frontend Junior
          Developer. Actually i'm studying Electrical Engineer at CEFET-MG. Open to work remotely in any where, and in face-to-face at Belo Horizonte, Brazil &#127463;&#127479;.{" "}
        </p>
        <div>
            <h3 className="sidebar-title">My skills</h3>
          <div className="sidebar-tech-container">
            <div>
            <h4>Programming Languages</h4>
            <ul className="sidebar-list">
              <li className="sidebar-icon javascript">
                <JavascriptIcon />
              </li>
              <li className="sidebar-icon typescript">
                <TypescriptIcon />
              </li>
              <li className="sidebar-icon csharp"><CsharpIcon/></li>
            </ul>
            </div>
            <div>
            <h4>Frontend Technologies</h4>
            <ul className="sidebar-list">
              <li className="sidebar-icon react">
                <ReactIcon />
              </li>
              <li className="sidebar-icon sass">
                <SassIcon />
              </li>
              <li className="sidebar-icon css">
                <CssIcon />
              </li>
              <li className="sidebar-icon html">
                <HtmlIcon />
              </li>
            </ul>
            </div>
            <div>
            <h4>Other skills</h4>
            <ul className="sidebar-list">
              <li className="sidebar-icon nodejs"><NodeJSIcon/></li>
              <li className="sidebar-icon git"><GitIcon/></li>
              <li className="sidebar-icon "><SassIcon/></li>
            </ul>
            </div>
          </div>
            <h3 className="sidebar-title" >Contact me</h3>
            <ul className="sidebar-list">
                <a>
              <li className="sidebar-icon linkedin">
                  <LinkedinIcon/>
              </li>
                </a>
              <li className="sidebar-icon github">
                <a>
                  <GithubIcon/>
                </a>
              </li>
              <li className="sidebar-icon mail">
                <a>
                  <MailIcon/>
                </a>
              </li>
            </ul>
        </div>
      </aside>
      <article className="article">
        <header className="article-header">
          <h2 className="article-header-title">
            Welcome to my animation-css-web course
          </h2>
        </header>
        <p className="article-description">
          This website is the result of my studies in SASS, together with some
          concepts of CSS animations learned in the&nbsp;
          <a href="" about="advanced css animation course" target="_blank">
            Advanced CSS Animations Course
          </a>
          &nbsp;that demonstrates in practice, many of these concepts used.
        </p>
        <p className="article-description">
          Here i will explain to you, how you can do some{" "}
          <strong>awesome</strong> animations just using css and sass
          techniques.
        </p>
        <section className="article-techs">
          <header className="article-techs-header">
            <h3 className="article-techs-header-title">Technologies used</h3>
          </header>
          <div className="article-techs-container">
            {techs.map(({ Icon, description, documentationUrl, techName }) => (
              <Card.Tech
                key={techName}
                Icon={Icon}
                description={description}
                documentationUrl={documentationUrl}
                techName={techName}
              />
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
