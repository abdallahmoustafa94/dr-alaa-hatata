import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>الاسكندرية</h3>
                <p>مصر</p>
                <span>info@dralaahatata.com</span>
                {/* <span>01551029625</span> */}
              </div>
            </div>

            <div className="col-lg-6 p-0">
              <div className="single-contact-map">
              <iframe src="https://www.google.com/maps/d/embed?mid=1nn96wcV-vjE0UrTBZ6FW9i6Cef0&hl=en&ehbc=2E312F"   loading="lazy" />
              </div>
            </div>

           

          
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
