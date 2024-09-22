/*Rouhollah Kamali StudentID : 301495125    9/21/2024   */

import logo from '../assest/logo.png'

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
            <p  className="lead fs-4 text-secondary mb-3">Hello! I’m Rouhollah Kamali , but just call me Farshad, a computer engineer with a passion for web development and new technologies.</p>
            <p  className="mb-5">Eexperiences in designing, developing, and optimizing web applications by ASP.NET Core. and have a CCNA & Azure certifications </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>    
    </>
    );
 }
    