/*Rouhollah Kamali StudentID : 301495125    9/21/2024   */

import logo from '../assest/profile-pic.png'
import resume from  '../assest/Resume.pdf'

/* Function to download the Resume.pdf file when called */
const onButtonClick = () => {
  const Url = resume;
  const link = document.createElement("a");
  link.href = Url;
  link.download = "Resume.pdf"; // specify the filename
  document.body.appendChild(link);  
  link.click();                      // Programmatically click the link to trigger the download  
  document.body.removeChild(link);   // Remove the link from the document after triggering the download
};

export default function About() { 
return (
<>
 {/* About me section  */}
<section  className="py-3 py-md-5">
  {/* my personal image  */}
  <div  className="container">
    <div  className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div  className="col-12 col-lg-6 col-xl-5">
        <img  className="img-fluid rounded" loading="lazy" src={logo} alt="About 1"/>
      </div>
       {/* about me description  */}
      <div  className="col-12 col-lg-6 col-xl-7">
        <div  className="row justify-content-xl-center">
          <div  className="col-12 col-xl-11">
            <h2  className="mb-3">Who am I?</h2>
            <p  className="lead fs-4 text-secondary mb-3">Hello, I’m Rouhollah Kamali, but you can call me Farshad. I am a computer engineer with a strong passion for web development and emerging technologies.</p>
            <p  className="mb-5">I have extensive experience in designing, developing, and optimizing web applications using ASP.NET Core, and I hold certifications in CCNA and Azure</p>
            <p className="lead fs-4 text-secondary mb-3"><button  className="btn btn-primary btn-lg" onClick={onButtonClick}>dowload my resume</button ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>    
    </>
    );
 }
    