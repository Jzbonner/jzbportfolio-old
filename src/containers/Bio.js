import React, {Component} from 'react';
import Footer from './Footer';
import UNC from '../assets/unc_logo.png';

import '../App.css';

export default class Bio extends Component {
  render() {
    return (
      <div className="bio">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="about-title">About</h2>
            <p className="general-interest">
              Driven by a passion for the field, I have converted my academic
              background into a multidisciniplinary skill set. Through course
              work at UNC and experience working in industry I've found myself
              taking an interest in kaggle competitions, freelance web and
              mobile development, spanish as a second language, and financial
              engineering research
            </p>

            <table className="university-section">
              <tbody>
                <tr>
                  <td className="university-logo">
                    <img className="uni-logo-pic" src={UNC} alt="unc_logo" />
                  </td>
                  <td className="university-name">
                    <p className="general-interest-education">
                      University of North Carolina at Chapel Hill <br />{' '}
                      Bachelor's of Science in Information Science
                      <br />
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Course Listing Section */}
            <table className="course-overview">
              <tbody>
                <tr>
                  <td className="course-title">
                    {' '}
                    INLS 202 <br />
                    Retrieval and Organizing Systems
                  </td>
                  <td className="course-description">
                    Foundational core concepts and core techniques in
                    information organization, information retrieval, and data
                    mining
                  </td>
                </tr>
                <tr>
                  <td className="course-title">
                    {' '}
                    INLS 203/500 <br />
                    Human Information Behaviors <br />
                    and Interactions{' '}
                  </td>
                  <td className="course-description">
                    Overview of key areas and concepts in information science,
                    to include task modeling, information seeking behavior,
                    search behavior, human-computer interactions, usability,
                    user interfaces, social media and social media analysis.
                  </td>
                </tr>
                <tr>
                  <td className="course-title">
                    {' '}
                    INLS 520 <br />
                    Organization of Information{' '}
                  </td>
                  <td className="course-description">
                    Introduction to the problems and methods of organizing
                    information, including information structures, knowledge
                    schemas, data structures, terminological control, index
                    language functions, and implications for searching
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <p className="general-interest-3">
              <i className=" ql fas fa-quote-left"></i>{' '}
              <i className="qr fas fa-quote-right"></i> Gaining experience in
              life is about finding your medium in a world of extremes{' '}
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
