import React from 'react'

function Footer() {
  return (
    <div >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <p className='fw-bold'>One's destination is never a place, but a new way of seeing things.</p>
            <div> <i className="bi bi-facebook bg-primary"></i>
           <i className="bi bi-instagram" />
  <i className="bi bi-whatsapp" />
</div>

          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-lg-4">
                <h6>Company</h6>
                <ul>
                  <li>Why Travel</li>
                  <li>FAQ's</li>
                  <li>Our Blog</li>
                  <li>Accessbility</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h6>Support</h6>
                <ul>
                  <li>Help Center</li>
                  <li>Safety Information</li>
                  <li>Cancellation's Option</li>
                  <li>Our COVID-19 Response</li>
                  <li>Try Hosting</li>
                  
                </ul>
              </div>
              <div className="col-lg-4">
                <h6>About Us</h6>
                <ul>
                  <li>Newsroom</li>
                  <li>New Features</li>
                  <li>Our Founders</li>
                  <li>Careers</li>
                  <li>Top Destination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <p className='bg-primary text-light text-center'>&copy; 2024 All Rights Reserved.</p>
      </section>
    </div>
  )
}

export default Footer
