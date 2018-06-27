import React, { Component } from 'react';
import Footer from './Footer';

import '../App.css';

export default class Experience extends Component {
    render() {
        return (
            <div className="experience">
            {/* 
                Consider adding card elements to the individual employment opportunities for a nicer visual 
                layout using Material UI 
            */}
                <h2> Employment Experience </h2>
                <br />
                <p>
                Monster Marketers Inc. IT Consultant/ Customer Service Representative Lawrenceville, GA, <br /> 
                •	Served customers by providing relevant product and advertising service information <br /> 
                •	Maintained and updated customer records and financial accounts <br /> 
                •	Developed interpersonal skills by communicating with customer clientele and company administration <br /> 
                •	Gained proficiency in an office setting as well as expertise in Microsoft Office <br />  
                <br />
                Office of Arts and Sciences Information Services (OASIS) WordPress Technician Chapel Hill, NC <br /> 
                •	Worked as a WordPress technician providing technology solutions and troubleshooting assistance services <br /> 
                •	Worked with UNC faculty and administration to build technological connections throughout the on-campus community  <br /> 
                •	Gained proficient computer skills in HTML, WordPress, and Python; and enhanced my task management abilities in a professional work setting <br /> 
                <br />
                Cisco Systems Inc. Junior and Senior Intern Lawrenceville, GA <br /> 
                •	Worked as a materials testing assistant in the mechanical engineering department <br /> 
                •	Heat tested a number of different devices from set top boxes to wireless routers and modems <br /> 
                •	Gained a fundamental understanding of IT security and SQL environments  such as Microsoft Access and MySQL <br /> 
                •	Gained knowledge on how to work with a team, how to lead a team, and the benefits and disadvantages of working solo versus in a group setting <br /> 
                <br />
                Flood Atlanta Sub-Contracting Company Employee Lawrenceville, GA <br /> 
                •	Worked with a team to restore and renovate water-damaged properties <br /> 
                •	Worked with information databases for the purpose of storing details on company projects, customer records and financial documentation <br /> 
                •	Worked in a supporting role to the company and lead in organizing general labor projects <br /> 
                •	Gained fundamental construction and customer care/relations experience <br /> 
                •	Gained valuable experience with food preparation and food service via volunteering at local hospitals <br />              
                </p>
                <Footer />
            </div> 
        )
    }
}