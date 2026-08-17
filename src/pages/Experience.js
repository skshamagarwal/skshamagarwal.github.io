import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import ExpList from "../assets/data/experience";
import VolList from "../assets/data/volunteer";

const ExpStyles = styled.div`
  padding-top: 10rem;
  min-height: 100vh;
  background: linear-gradient(180deg, transparent 0%, rgba(95, 140, 109, 0.05) 50%, transparent 100%);

  .section__title {
    padding: 5rem 0;
  }

  .timeline__container {
    width: 100%;
    display: flex;
    padding: 5rem 0;

    .timeline {
      height: auto;
      margin: 0 auto;
      position: relative;

      ul {
        list-style: none;

        li {
          color: var(--white);
          background: linear-gradient(135deg, var(--gray-2) 0%, var(--deep-dark) 100%);
          border: 1px solid rgba(95, 140, 109, 0.2);
          padding: 30px;
          border-radius: 15px;
          margin-bottom: 20px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

          &:hover {
            transform: translateY(-5px);
            border-color: rgba(95, 140, 109, 0.5);
            box-shadow: 0 12px 30px rgba(95, 140, 109, 0.2);
            background: linear-gradient(135deg, rgba(95, 140, 109, 0.1) 0%, rgba(247, 244, 234, 0.05) 100%);
          }

          &:last-child {
            margin-bottom: 0;
          }

          .timeline__content {
            .period {
              font-size: 13px;
              font-weight: 600;
              margin-bottom: 10px;
              letter-spacing: 2px;
              color: var(--primary);
              text-transform: uppercase;
            }

            .position {
              font-size: 25px;
              font-weight: 700;
              line-height: 30px;
              margin-bottom: 10px;
              background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            
            .compName {
              margin-bottom: 2rem;
              letter-spacing: 2px;
              font-size: 12px;
              color: var(--primary-light);
              font-weight: 600;
              text-transform: uppercase;
            }
            
            p {
              font-size: 16px;
              line-height: 30px;
              font-weight: 400;
              color: var(--gray-1);
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .timeline {
      &::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 3px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(180deg, var(--primary) 0%, var(--secondary) 50%, var(--accent) 100%);
      }

      ul {
        li {
          width: 50%;
          margin-bottom: 50px;
          position: relative;

          &:nth-child(odd) {
            float: left;
            clear: right;
            transform: translateX(-30px);
            border-radius: 20px 0 20px 20px;

            &::after {
              right: -30px;
              transform: translate(50%, -50%);
            }
          }

          &:nth-child(even) {
            float: right;
            clear: left;
            transform: translateX(30px);
            border-radius: 0 20px 20px 20px;

            &::after {
              left: -30px;
              transform: translate(-50%, -50%);
            }
          }

          &::after {
            content: "";
            position: absolute;
            height: 20px;
            width: 20px;
            background-color: var(--gray-1);
            border-radius: 50%;
            top: 0;
          }

          &:hover:after {
            background-color: var(--deep-dark);
            border-style: solid;
            border-color: var(--gray-1);
          }

          .timeline__content {
            .period {
              top: -30px;
              position: absolute;
            }
          }
        }
      }
    }
  }
`;
export default function Experience() {
  return (
    <ExpStyles>
      <div className="section__title">
        <SectionTitle
          heading="Experience"
          subheading="companies I've worked with"
          headingLevel={1}
        />
      </div>
      <div className="container">
        <div className="timeline__container">
          <div className="timeline">
            <ul>
              {ExpList.map((exp) => (
                <li key={exp.name + exp.duration}>
                  <div className="timeline__content">
                    <p className="period">{exp.duration}</p>
                    <h2 className="position">{exp.position}</h2>
                    <p className="compName">{exp.name}</p>
                    <p>{exp.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section__title">
          <SectionTitle
            heading="Volunteer Roles"
            subheading="positions I've volunteered for"
          />
        </div>
        <div className="timeline__container">
          <div className="timeline">
            <ul>
              {VolList.map((vol) => (
                <li key={vol.name + vol.duration}>
                  <div className="timeline__content">
                    <p className="period">{vol.duration}</p>
                    <h2 className="position">{vol.position}</h2>
                    <p className="compName">{vol.name}</p>
                    <p>{vol.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ExpStyles>
  );
}
