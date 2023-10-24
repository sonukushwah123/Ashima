import React, { useEffect, useState } from "react";

const Form = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    companyName:"",
    message:"",

  };

  // const navigate = useNavigate();

  const [User, setUser] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState();
  const [data, setData] = useState();
  // const [image,setImage] = useState("")

  // const [error, setError] = useState()

  // const [state, setState] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };



//  const setImagePath = (e) => {
//     let reader = new FileReader() 
//     reader.readAsDataURL(e.target.files[0])
    
    
//     reader.onload = () => {      
//      setState({        
//       queryImage: reader.result      
//      })    
//      console.log(state)
//    }
//   }

  // useEffect(() => {
  // 	console.log(message);
  // 	if(Object.keys(message).length === 0 && isSubmit) {
  // 		console.log(User);

  // 	}
  // },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, jobTitle,companyName,message } = User;

    console.log(User)


    // const formData = new FormData()
    // formData.append("name",name)
    // formData.append("email",email)
    // formData.append("phone",phone)
    // formData.append("job",jobTitle)
    // formData.append("company",companyName)
    // formData.append("message",message)
    // formData.append("image",image)

    // console.log(formData)


    const object = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      jobTitle: jobTitle.trim(),
      companyName: companyName.trim(),
      message: message.trim(),       
    
    };
  
    console.log(object)

  

      fetch("https://admin.ashimaelectrotech.com/contectUs", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(object),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json(console.log(response)))

        .then((json) => {
          setData(json.message);
       
          console.log(json);
        })
        .catch((err) => {
          console.log(err);
        });
  

      setIsSubmit(true);
     }


  useEffect(() => {
    const res = data?.User?.message;
    setMessage(res);
  }, [data]);



  
  return (
    <div>
      {/* inquiry form */}
      <div className="container-inner60 form paddingtb30" id="form">
        <h1>Send your enquiry</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group ">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange} placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group ">
            <label htmlFor="name">Job Title</label>
            <input
              type="text"
              id="job"
              name="jobTitle"
              onChange={handleChange} placeholder="Job Title"
              required
            />
          </div>
          <div className="form-group ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange} placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group ">
            <label htmlFor="name">Company Name</label>
            <input
              type="text"
              id="company"
              name="companyName"
              onChange={handleChange} placeholder="Enter your Company Name"
              required
            />
          </div>
          <div className="form-group ">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              onChange={handleChange} placeholder="Enter your phone"
              required
            />
          </div>
          <div className="form-group ">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange} placeholder="Enter your message"
              required
              defaultValue={""}
            />
          </div>
       
          <div className="form-group">
            <input type="submit" defaultValue="Send Message" />
          </div>
          <div className="form-group">
            <p className="mb-0">We will reply you as soon as possible.</p>

            <h4 className="text-center d-flax justify-content-center align-items-center" style={{color:"blue"}}>{data}{data==="Query Submited"? <h4 className="emoji">👍</h4>:"" }</h4>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
