import React from 'react'
import "./card.css"
export default function profileCard() {
  return (
    <div className="container-fluid pt-4 px-4">
      <div className="row g-4">
        <div className="col-sm-12 col-md-6 col-xl-8">
          <div className="bg-secondary rounded h-100 p-4">
            <h6 className="mb-4">Profile Card</h6>
            <div className="testimonial-item text-center">
              <img
                className="img-fluid rounded-circle mx-auto mb-4"
                src="img/testimonial-2.jpg"
                style={{ width: 100, height: 100 }}
                alt="Profile"
              />
              <h5 className="mb-1">Sidharth</h5>
              <p>Application Developer</p>
              <p className="mb-0">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
