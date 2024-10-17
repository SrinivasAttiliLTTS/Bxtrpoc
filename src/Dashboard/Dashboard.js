import React, { Component } from "react";
import "./Dashboard.css";
import sslogo from "../resources/ss_logo.png";
import Tabs from "../Tabs/Tabs";
import wifi from "../resources/wifi.png";
import minus from "../resources/minus.png";
import flag from "../resources/flag.png";
import flag_green from "../resources/flag_green.png";
import downArrow from "../resources/down.png";
// import Table from "react-bootstrap/Table";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Dashboard() {
  const tabData = [
    { label: "Clinical" },
    { label: "Patient Administration" },
    { label: "Adequest" },
    { label: "Reports" },
    { label: "More" },
  ];

  const data = [
    {
      title: "ABC, ABC",
      subtitle1: "01 January 1990",
      subtitle2: "Physician: DR. XZ, XYZ",
      day1: "minus",
      day2: "flag",
      day3: "flag_green",
      day4: "wifi",
      day5: "wifi",
      day6: "wifi",
      day7: "wifi",
    },
    {
      title: "Cooper, Kimberly",
      subtitle1: "10 January 1980",
      subtitle2: "Physician: last, test",
      day1: "wifi",
      day2: "wifi",
      day3: "wifi",
      day4: "wifi",
      day5: "wifi",
      day6: "wifi",
      day7: "wifi",
    },
    {
      title: "Jenkins, Daniel",
      subtitle1: "10 January 1980",
      subtitle2: "Physician: last, test",
      day1: "wifi",
      day2: "wifi",
      day3: "wifi",
      day4: "wifi",
      day5: "wifi",
      day6: "wifi",
      day7: "wifi",
    },
    {
      title: "Patient, Amia",
      subtitle1: "29 March 1997",
      subtitle2: "Physician: last, test",
      day1: "wifi",
      day2: "wifi",
      day3: "wifi",
      day4: "wifi",
      day5: "wifi",
      day6: "wifi",
      day7: "wifi",
    },
    {
      title: "Patient, Claria",
      subtitle1: "17 November 1962",
      subtitle2: "Physician: Dr. XYZ, XYZ",
      day1: "wifi",
      day2: "wifi",
      day3: "wifi",
      day4: "wifi",
      day5: "wifi",
      day6: "wifi",
      day7: "wifi",
    },
    {
      title: "Patient, Kaguya",
      subtitle1: "14 August 1950",
      subtitle2: "Physician: XYZ, XYZ",
      day1: "wifi",
      day2: "wifi",
      day3: "wifi",
      day4: "wifi",
      day5: "wifi",
      day6: "wifi",
      day7: "wifi",
    },
  ];

  const Info = () => (
    <div className="investigational_use">
      <p>
        Not for human use. CAUTION Investigational device. Limited by Federal
        (or United States) law to investigational use.
      </p>
    </div>
  );

  const Header = () => (
    <div className="Dashboard_Header">
      <img className="ss-logo" src={sslogo} />
      <div className="DashboardProfile">
        <div className="DashboardUser">
          <p style={{ fontWeight: "bold" }}>Davita Test</p>
          <div>
            <div>CommonClinic</div>
            <div>Test1</div>
          </div>
        </div>
        <div className="DashboardUserDetails">
          <img className="down" src={downArrow} />
          <p>(Logout)</p>
        </div>
      </div>
    </div>
  );

  const Tabbar = () => (
    <div className="Dashboard_Tab">
      <div style={{ flex: 6 }}>
        <Tabs tabs={tabData} />
      </div>
      <div
        style={{
          display: "flex",
          color: "white",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Help
      </div>
      {/* <div>
            <div className='Dashboard_Help'>Help</div>
            </div> */}
    </div>
  );

  // const Btable = () => (
  //   <div style={{ display: "flex", alignItems: "stretch", marginTop: "20px" }}>
  //     <Table striped bordered hover>
  //       <thead>
  //         <tr>
  //           <th>Patient</th>
  //           <th>Saturday 28</th>
  //           <th>Sunday 29</th>
  //           <th>Monday 30</th>
  //           <th>Tuesday 1</th>
  //           <th>Wednesday 2</th>
  //           <th>Thursday 3</th>
  //           <th>Friday 4</th>
  //           <th>Actions</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {data.map((val, key) => {
  //           return (
  //             <tr key={key}>
  //               <td>
  //                 <div>
  //                   {val.title}
  //                   {val.subtitle1}
  //                   {val.subtitle2}
  //                 </div>
  //               </td>
  //               <td>
  //                 <div>
  //                   <img
  //                     className="wifi"
  //                     src={val.day1 == "minus" ? minus : wifi}
  //                   />
  //                 </div>
  //               </td>
  //               <td>
  //                 <div>
  //                   <img
  //                     className="wifi"
  //                     src={val.day2 == "flag" ? flag : wifi}
  //                   />
  //                 </div>
  //               </td>
  //               <td>
  //                 <div>
  //                   <img
  //                     className="wifi"
  //                     src={val.day3 == "flag_green" ? flag_green : wifi}
  //                   />
  //                 </div>
  //               </td>
  //               <td>
  //                 <div>
  //                   <img className="wifi" src={wifi} />
  //                 </div>
  //               </td>
  //               <td>
  //                 <div>
  //                   <img className="wifi" src={wifi} />
  //                 </div>
  //               </td>
  //               <td>
  //                 <div>
  //                   <img className="wifi" src={wifi} />
  //                 </div>
  //               </td>
  //               <td>
  //                 <div>
  //                   <img className="wifi" src={wifi} />
  //                 </div>
  //               </td>
  //               <td>
  //                 <div>
  //                   <img className="wifi" src={wifi} />
  //                 </div>
  //               </td>
  //             </tr>
  //           );
  //         })}
  //       </tbody>
  //     </Table>
  //   </div>
  // );

  //   const PatientList = () => (
  //     <table className='Dashboard_Table'>
  //     <tr className='Dashboard_Table_header'>
  //         <th className='Dashboard_Table_row'>
  //             <p>Patient</p>
  //         </th>
  //         <th className='Dashboard_Table_row'><p>Saturday 28</p></th>
  //         <th className='Dashboard_Table_row'><p>Sunday 29</p></th>
  //         <th className='Dashboard_Table_row'><p>Monday 30</p></th>
  //         <th className='Dashboard_Table_row'><p>Tuesday 1</p></th>
  //         <th className='Dashboard_Table_row'><p>Wednesday 2</p></th>
  //         <th className='Dashboard_Table_row'><p>Thursday 3</p></th>
  //         <th className='Dashboard_Table_row'><p>Friday 4</p></th>
  //         <th className='Dashboard_Table_row'><p>Actions</p></th>
  //     </tr>
  //     {data.map((val, key) => {
  //         return (
  //             <tr className='Dashboard_Table_header' key={key}>
  //                 <td className='Dashboard_Table_row'>
  //                     <div className="Dashboard_Table_row_title">
  //                     <p>
  //                     {val.title}
  //                     </p>
  //                     <p>
  //                     {val.subtitle1}
  //                     </p>
  //                     <p>
  //                     {val.subtitle2}
  //                     </p>
  //                     </div>
  //                 </td>
  //                 <td className='Dashboard_Table_row'>

  //                         <div>
  //                              <img className='wifi' src={val.day1 == "minus" ? minus : wifi} />
  //                         </div>
  //                 </td>
  //                 <td className='Dashboard_Table_row'>

  //                         <div>
  //                             <img className='wifi' src={val.day2 == "flag" ? flag : wifi} />
  //                         </div>
  //                 </td>
  //                 <td className='Dashboard_Table_row'>

  //                         <div>
  //                             <img className='wifi' src={val.day3 == "flag_green" ? flag_green : wifi} />
  //                         </div>
  //                 </td>
  //                 <td className='Dashboard_Table_row'>
  //                     <div>
  //                     <img className='wifi' src={wifi} />
  //                     </div>
  //                 </td>
  //                 <td className='Dashboard_Table_row'>
  //                     <div>
  //                     <img className='wifi' src={wifi} />
  //                     </div>
  //                 </td>
  //                 <td className='Dashboard_Table_row'>
  //                     <div>
  //                     <img className='wifi' src={wifi} />
  //                     </div>
  //                 </td><td className='Dashboard_Table_row'>
  //                     <div>
  //                     <img className='wifi' src={wifi} />
  //                     </div>
  //                 </td>
  //                 <td className='Dashboard_Table_row'>
  //                     <div>
  //                     <img className='wifi' src={wifi} />
  //                     </div>
  //                 </td>
  //             </tr>
  //         )
  //     })}
  // </table>
  //   )

  return (
    <div className="Dashboard">
      <Info />
      <Header />
      <Tabbar />
      {/* <PatientList/>         */}
      {/* <Btable /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>
          Copyright © 2024 Baxter. All rights reserved. Patient Confidential
          Information.
        </p>
        <p>
          Baxter Corporate Site | Contact Us | Help & FAQs | Privacy
          Policy/Terms and Conditions
        </p>
      </div>
    </div>
  );
}
