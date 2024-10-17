import React, { useState } from "react";

const Tab = ({ label, onClick, isActive }) => (
    <div
        className={`tab ${isActive ? "active" : ""}`}
        onClick={onClick}
        style={{justifyContent: "center"}}
    >
        {label}
    </div>
);

export default Tab;