import React, { Component } from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import projectList from "../assets/data/projects";

const ProjectStyles = styled.div`
  padding-top: 10rem;
  min-height: 100vh;
  background: linear-gradient(180deg, transparent 0%, rgba(95, 140, 109, 0.05) 50%, transparent 100%);
  .error {
    padding: 10rem;
    text-align: center;
  }
  .filters {
    justify-content: center;
    margin-top: 3rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    animation: fadeIn 0.8s ease-out;
    .btn {
      background: linear-gradient(135deg, var(--gray-2) 0%, var(--deep-dark) 100%);
      border: 1px solid rgba(95, 140, 109, 0.2);
      padding: 1rem 2rem;
      border-radius: 12px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      p {
        text-transform: uppercase;
        font-size: 1.3rem;
        color: var(--gray-1);
        font-weight: 600;
        letter-spacing: 0.5px;
      }
      &:hover {
        background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
        border-color: var(--primary);
        p {
          color: var(--white);
          font-weight: bold;
        }
        box-shadow: 0 8px 20px rgba(95, 140, 109, 0.3);
        transform: translateY(-3px);
      }

      &.active {
        background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
        border-color: var(--primary);
        box-shadow: 0 8px 20px rgba(95, 140, 109, 0.3);
        p {
          color: var(--white);
          font-weight: bold;
        }
      }
    }
  }
  .card-container {
    margin: 3rem 0rem 3rem 0rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    animation: fadeIn 1s ease-out;
  }
`;

export class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projList: projectList,
      activeFilter: "All",
    };
  }

  BtnClick = (name) => {
    this.setState({ activeFilter: name });
    if (name === "All") {
      this.setState({ projList: projectList });
    } else {
      let tempList = [];
      for (let i = 0; i < projectList.length; i++) {
        for (let j = 0; j < projectList[i].tech.length; j++) {
          if (name.toLowerCase() === projectList[i].tech[j]) {
            tempList.push(projectList[i]);
            break;
          }
        }
      }
      for (var i = tempList.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = tempList[i];
        tempList[i] = tempList[j];
        tempList[j] = temp;
      }
      this.setState({ projList: tempList });
    }
  };

  filter_names = [
    "All",
    "JavaScript",
    "HTML CSS",
    "Django",
    "React",
    "NodeJs",
    "AI ML",
    "Flutter",
    "Dart",
    "Python",
  ];

  render() {
    return (
      <ProjectStyles>
        <SectionTitle heading="Projects" subheading="a selection of things I've built" headingLevel={1} />
        <div className="filters">
          {this.filter_names.map((name, index) => (
            <button
              onClick={() => this.BtnClick(name)}
              key={index}
              className={`btn rounded-md ${
                this.state.activeFilter === name ? "active" : ""
              }`}
            >
              <p>{name}</p>
            </button>
          ))}
        </div>
        <div className="card-container">
          {this.state.projList.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </ProjectStyles>
    );
  }
}

export default Projects;
