import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExploreCatagories from "./HomeFolder/ExploreCatagories";
import axios from "axios";
import DownloadButton from "./DownloadButton";

const Job = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    qualification: "",
  };

  // const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [qualification, setQualification] = useState("");
  const [resumeFile, setResumeFile] = useState(null);

  console.log(resumeFile);

  const handleFileChange = (event) => {
    setResumeFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, jobTitle, phone, qualification, resumeFile);
    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("jobTitle", jobTitle);
    formData.append("qualification", qualification);

    fetch("https://admin.ashimaelectrotech.com/applyJob", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json(console.log(response)))
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="container-inner d-flax align-item-center justify-between paddind20">
        <div className="heading">
          <h1 className="align-item-center">
            <img src="images/acme-logo02.jpg" alt="Acme Logo" /> - A Total
            Solution For Earthing &amp; Lightning Protection
          </h1>
        </div>
        <div className="down-btn">
        <DownloadButton />
        </div>
      </div>
      {/* Slider */}
      <div className="container-outer  ">
        <div className="slider">
          <div className=" container-inner">
            <img src="images/slider-images04.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="container-inner job paddind20">
        <h1>Recruitment</h1>
        <p>
          We are looking for smart individuals who want to have a positive
          impact on the world. If that’s you, visit our Careers page or send us
          a CV at:
        </p>
        <p className="info">
          <Link to="mailto:info@ashimaelectrotech.com">
            info@ashimaelectrotech.com
          </Link>
        </p>
      </div>
      {/* inquiry form */}
      <div className="container-inner60 form paddingtb30" id="form">
        <h1>Apply for job</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group ">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group ">
            <label htmlFor="name">Job Title</label>
            <input
              type="text"
              id="job"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Job Title"
              required
            />
          </div>
          <div className="form-group ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group ">
            <label htmlFor="name">Qualification</label>
            <input
              type="text"
              id="company"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              placeholder="Enter your Qualification Name"
              required
            />
          </div>
          <div className="form-group ">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone"
              required
            />
          </div>

          <div className="form-group ">
            <label htmlFor="phone">Upload Your Resume</label>
            <input
              type="file"
              className="border-0"
              onChange={handleFileChange}
              placeholder="Enter your phone"
              required
            />
          </div>
          <div className="form-group">
            <input type="submit" defaultValue="Send Message" />
          </div>
          <div className="form-group">
            <p>We will reply you as soon as possible.</p>
          </div>
        </form>
      </div>
      <div className="container-inner solutions">
        <h1>More Information</h1>
        <ExploreCatagories />
      </div>
    </div>
  );
};

export default Job;
