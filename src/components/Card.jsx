import React from "react";
import certifications from "../../src/assets/certifications.png"
import logo from "../../src/assets/logo.png"
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <div className="img1">
          <img className="circle-img" src={props.img} alt="avatar_img" />
          <img className="logo" src={logo} alt="avatar_img" />
        
        </div>
        <div className="name1">
          <h2 className="name">{props.name}</h2>
          <p className="designation">{props.designation}</p>
          <p className="companyName">Zarttech B.V The Netherlands (HQ)</p>
          <p className="userDetail">{props.email}</p>
          <p className="userDetail">{props.phone}</p>
          <p className="userDetail">{props.directPhone}</p>
        </div>
        <div className="info">
          <h2 className="location">The Netherlands</h2>
          <p className="tel">+31 85 208 26 27</p>

          <h2 className="location">United Kingdom</h2>
          <p className="tel">+44 330 808 9845</p>
          <h2 className="location">United States</h2>
          <p className="tel">+1 833 283 3940</p>
          <img className="certifications" src={certifications} alt=''></img>
        </div>
      </div>
      <div className="bottom">
        <p className="footer">
          DISCLAIMER: This communication contains confidential information. If
          you are not the intended recipient, you may not use, copy and/or
          disclose any of this information. Please contact us immidiately and
          delete this communication from your systems.
        </p>
      </div>
    </div>
  );
}

export default Card;
