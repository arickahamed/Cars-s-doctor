import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setInfo(data));
    }, []);

    return (
        <div id="services" className="mt-5">
            <h1 className="services-title">Our Services</h1>
            <div className="services-container">
                {!info ? (
                    <p>Loading...</p>
                ) : (
                    info.map((service) => (
                        <Service key={service.id} service={service} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Services;
