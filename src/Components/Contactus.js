/*Rouhollah Kamali StudentID : 301495125    9/21/2024   */

import { Link } from 'react-router-dom';
export default function Contactus() {

return(
<>
 {/* contact me section  */}
<div class="container contact-section mb-5">
    <div class="row">
        <div class="col-md-6">
            <div class="contact-form">
                <h2>Contact Us</h2>
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter your name" required />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter your email" required />
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea class="form-control" id="message" rows="4" placeholder="Your message" required></textarea>
                    </div>
                    <Link to="/" className="btn btn-primary btn-block mt-3">Send Message</Link>
                </form>
            </div>
        </div>

         {/* my contact me information  */}
        <div class="col-md-6">
            <div class="contact-info">
                <h3>Contact Information</h3>
                <p><i class="fas fa-envelope icon"></i><strong>Email:</strong>farshadkamali37@gmail.com</p>
                <p><i class="fas fa-phone icon"></i><strong>Phone:</strong> (437) 218-6520</p>              
            </div>
        </div>
    </div>
</div>
</>
    );
}