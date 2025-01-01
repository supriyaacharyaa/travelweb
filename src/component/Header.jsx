import React from 'react'

function Header() {
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <img className='w-50 logo' src="https://image.similarpng.com/thumbnail/2021/08/Illustration-of-Travel-agency-logo-design-template-on-transparent-background-PNG.png" alt="" />
            </div>
            <div className="col-lg-7">
            <nav className="navbar " >
<ul className='d-flex gap-5'>
    <li><a href="">Home</a></li>
    <li><a href="">About Us</a></li>
    <li><a href="">Packages</a></li>
    <li><a href="">Destinations</a></li>
    <li><a href="">Blog</a></li>
    <li><a href="">Contact Us</a></li>
</ul>
</nav>
            </div>
            <div className="col-lg-2">
            <i className="bi bi-person-circle"></i>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header
