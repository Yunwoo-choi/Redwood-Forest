import React, { Component } from 'react';
import Logo from '../assets/LogoThumbnail.png';
import Ricky from '../assets/Ricky.jpg';
import Kevin from '../assets/Kevin.jpg';
import Eric from '../assets/Eric.jpg';
// import { connect } from 'react-redux';

// color pallete: https://www.colorcombos.com/color-schemes/386/ColorCombo386.html

class Header extends Component {
    state = {
        email: '',
        password: ''
    }

    render() {
        return (
            <div>

                {/*                                           HEADER                                                */}
                <div className="header">
                    <a href="#default" className="logo" >
                        Redwood Forest
                    </a>
                    <div className="header-right" style = {{color: 'white'}}>
                        <a className="active" href = "https://redwoodcodeacademy.com/" target = "_blank" >Join The Community!</a>
                        <a style = {{color: "white"}} href="https://www.switchup.org/bootcamps/redwood-code-academy" target = "_blank">Reviews</a>
                        <a href="#contact" style = {{color: "white"}}>Contact</a>
                        <a href="#about" style = {{color: "white"}}>About</a>
                        <a style = {{color: "white"}}>Find Your Cohort</a>
                    </div>
                </div>

                {/*                                           Enter ZIP                                                */}
                <div className="BackgroundImage" id="home">
                    <div className="FindTutor">
                        <div className="form-group custom-form">
                            <div className="form-group">
                                <img alt="Logo" src={Logo} className="LogoThumbnail" style={{ width: 75, height: 75, marginBottom: 0 }} />
                                <p className="LogoThumbnail" style={{ fontWeight: 'bold', fontStyle: "italic", marginTop: 0, marginBottom: 40 }}>Redwood Forest</p>
                                <h4 style={{ fontFamily: 'Mali' }}>Good Morning!</h4>
                                <p style={{ color: '#505050', fontSize: 12, fontFamily: 'Open Sans Condensed', fontWeight: "bold" }}>Connect With Your Redwood Code Academy Alumni!</p>
                                <hr style={{ marginBottom: 30, marginTop: 20 }} />
                                <p style={{ textAlign: 'center', color: '#505050', fontFamily: 'Open Sans Condensed' }}>Ask Question, Find Jobs, Network!</p>
                                <label style={{ margin: 0, fontWeight: 'bold', fontFamily: 'Mali' }}>Email</label>
                                <input value={this.state.email} onChange = {(e) => this.setState({email: e.target.value})} type="text" className="form-control" placeholder="Email Address" />
                                <label style={{ margin: 0, fontWeight: 'bold', fontFamily: 'Mali'  }}>Password</label>
                                <input value = {this.state.password} onChange = {(e) => this.setState({password: e.target.value})} type="text" className="form-control" placeholder = "Enter Your Password" />
                            </div>
                            <button type="submit" className="btn btn-info float-right" style={{ marginBottom: 40 }}>Login!</button>
                        </div>
                        <div className="custom-form2">
                            <div style={{ alignSelf: 'flex-end', marginLeft: 20, fontFamily: 'Srisakdi', color: 'white', width: 300 }}>
                            </div>
                        </div>
                    </div>
                </div>

                {/*                                           CONTACT                                                */}
                <div className="Information" style={{ backgroundColor: "#936A4A", color: "#D5A253", marginTop: -20 }}>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <h2 id="contact" style={{ flex: 1, marginBottom: 5, marginTop: 25 }}>Contact Us</h2>
                        <div>
                            <button className="btn btn-light" style={{ borderColor: '#936A4A', backgroundColor: '#936A4A' }}><i className="fab fa-facebook-square fa-2x"></i></button>
                            <button className="btn btn-light" style={{ borderColor: '#936A4A', backgroundColor: '#936A4A' }}><i className="fab fa-twitter fa-2x"></i></button>
                            <button className="btn btn-light" style={{ borderColor: '#936A4A', backgroundColor: '#936A4A' }}><i className="fab fa-flickr fa-2x"></i></button>
                            <button className="btn btn-light" style={{ borderColor: '#936A4A', backgroundColor: '#936A4A' }}><i className="fab fa-instagram fa-2x"></i></button>
                            <button className="btn btn-light" style={{ borderColor: '#936A4A', backgroundColor: '#936A4A' }}><i className="fab fa-tumblr fa-2x"></i></button>
                        </div>
                        <h6 style={{ fontFamily: 'Open Sans Condensed', marginTop: 5 }}>Email us at:<a style={{ marginLeft: 5, color: "#D5A253" }} href="" target="_top">RedwoodForest@Gmail.com</a></h6>
                        <h6 style={{ fontFamily: 'Open Sans Condensed', marginTop: 5 }}>For More Information Call us at:  <a style={{ marginLeft: 5, color: "#D5A253" }} href="" target="_top">(714) 714-7147</a></h6>
                    </div>


                    {/*                                           ABOUT US                                                */}
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <h2 id="about" style={{ flex: 1, marginBottom: 5, marginTop: 25 }}>About Us</h2>
                        <div>
                            <img className="profileThumbnail" style={{ margin: 4 }} src={Kevin} alt="Kevin" />
                            <img className="profileThumbnail" style={{ margin: 4 }} src={Eric} alt="Eric" />
                            <img className="profileThumbnail" style={{ margin: 4 }} src={Ricky} alt="Ricky" />
                        </div>
                    </div>
                </div>
            </div>
        )


    }
}

export default Header;
