/*Rouhollah Kamali StudentID : 301495125    9/21/2024   */


export default function services(){
return(
    <>
  {/* my services section  */}
    

<div className="container mt-5">
    <div className="row">
    <h1>ASP.NET Core Development Services</h1>
    <p>Delivering powerful and scalable backend solutions using ASP.NET Core.</p>
        <div className="col-md-4">
            <div className="card service-card mb-4">
                <div className="card-body text-center">
                    <i className="bi bi-code-slash service-icon"></i>
                    <h5 className="card-title">API Development</h5>
                    <p className="card-text">Creating robust RESTful APIs using ASP.NET Core for seamless integration.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card service-card mb-4">
                <div className="card-body text-center">
                    <i className="bi bi-database service-icon"></i>
                    <h5 className="card-title">Entity Framework Core</h5>
                    <p className="card-text">Implementing data access with Entity Framework Core for efficient database management.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card service-card mb-4">
                <div className="card-body text-center">
                    <i className="bi bi-shield-lock service-icon"></i>
                    <h5 className="card-title">Authentication & Authorization</h5>
                    <p className="card-text">Setting up secure authentication and authorization mechanisms for your applications.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4">
            <div className="card service-card mb-4">
                <div className="card-body text-center">
                    <i className="bi bi-cloud-arrow-up service-icon"></i>
                    <h5 className="card-title">Cloud Deployment</h5>
                    <p className="card-text">Deploying ASP.NET Core applications on cloud platforms like Azure for scalability.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card service-card mb-4">
                <div className="card-body text-center">
                    <i className="bi bi-gear-fill service-icon"></i>
                    <h5 className="card-title">Microservices Architecture</h5>
                    <p className="card-text">Building microservices with ASP.NET Core for improved scalability and maintainability.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card service-card mb-4">
                <div className="card-body text-center">
                    <i className="bi bi-bug service-icon"></i>
                    <h5 className="card-title">Performance Optimization</h5>
                    <p className="card-text">Optimizing ASP.NET Core applications for better performance and faster response times.</p>
                </div>
            </div>
        </div>
    </div>
</div>   
    </>
);
}