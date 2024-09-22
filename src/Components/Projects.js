
/*Rouhollah Kamali StudentID : 301495125    9/21/2024   */

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../assest/imgs', false, /\.(png|jpe?g|svg)$/))

export default function Projects(){
    return(
      <>
  {/* my projects section  */}
  <div className="container mt-5">
    <div className="row">
	  <h1>My Projects</h1>
    <p>Explore the some of projects I've worked on.</p>
    <div className="col-md-4">
            <div className="card project-card mb-4" >            
                <img src={images['Cablesizing.png']} className="card-img-top project-image" alt="Project 1" />
                <div className="card-body">
                    <h5 className="card-title">Cable Sizing</h5>
                    <p className="card-text">This app is designed to calculate cable sizes for industrial equipment, such as motors and electrical panels. An app that's a game-changer for all electrical enthusiasts</p>
                    <a href="https://www.linkedin.com/posts/farshad-kamali-17625a38_electricalengineering-innovation-tech-ugcPost-7156887594369224704-InBF?utm_source=share&utm_medium=member_desktop" className="btn btn-primary" target="_blank">View Project</a>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card project-card mb-4" >            
                <img src={images['timcheh.png']} className="card-img-top project-image" alt="Project 1" />
                <div className="card-body">
                    <h5 className="card-title">Timcheh</h5>
                    <p className="card-text">This website is for people to post their ads to offer to others.I served as the backend developer and designed and implemented the server-side logic by ASP.net Core</p>
                    <a href="https://timcheh.ca" className="btn btn-primary" target="_blank">View Timcheh</a>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card project-card mb-4" >            
                <img src={images['hamipet.png']} className="card-img-top project-image" alt="Project 1" />
                <div className="card-body">
                    <h5 className="card-title">Hami.pet</h5>
                    <p className="card-text">This website is for those who want to adapt their pets.I served as the backend developer and designed and implemented the server-side logic by ASP.net MVC</p>
                    <a href="https://hami.pet" className="btn btn-primary" target="_blank">View Hami pet</a>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card project-card mb-4" >
                <img src={images['tvtobook.png']} className="card-img-top project-image" alt="Project 1" />
                <div className="card-body">
                    <h5 className="card-title">tvtobook.com</h5>
                    <p className="card-text">I served as the backend developer for this online shopping site for books, where I designed and implemented the server-side logic by ASP.net MVC</p>
                    <a href="https://tvtobook.com" className="btn btn-primary" target="_blank">View tvtobook</a>
                </div>
            </div>
        </div>      
    </div> 
    </div>
    </>
    );
}