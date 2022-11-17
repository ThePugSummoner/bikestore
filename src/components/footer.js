import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../images/AngularBikes4.png"

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="footer-tuoteryhma col-md-3 col-6 mt-3">
                       <dl>
                        <dt className="mb-2">Tuotekategoriat</dt>
                        <dd>
                            <span>Maastopyörät</span>
                            <span>Sähköpyörät</span>
                            <span>Maantiepyörät</span>
                            <span>Lastenpyörät</span>
                            <span>Tarvikkeet</span>
                            <span>Huolto</span>
                        </dd>
                       </dl>
                    </div>
                    <div className="footer-myymala col-md-3 col-6 mt-3">
                        <dl>
                            <dt className="mb-2"><FontAwesomeIcon icon="fa-solid fa-store" /> Myymälä</dt>
                            <dd>
                                <span>Herkola 12</span>
                                <span>01235 Naantali</span>
                            </dd>
                            <dt className="my-2"><FontAwesomeIcon icon="fa-solid fa-clock" /> Aukioloajat</dt>
                            <dd>
                                <span className="span-container">
                                    <span>Ma-Pe</span>
                                    <span>8-16</span>
                                </span>

                                <span className="span-container">
                                    <span>La</span>
                                    <span>8-14</span>
                                </span>

                                <span className="span-container">
                                    <span>Su</span>
                                    <span>Suljettu</span>
                                </span>

                            </dd>
                        </dl>
                    </div>
                    <div className="footer-huolto col-md-3 col-6 mt-3">
                        <dl>
                            <dt className="mb-2"><FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" /> Huolto</dt>
                            <dd>
                                <span>Mallitie 22</span>
                                <span>01235 Naantali</span>
                            </dd>
                            <dt className="my-2"><FontAwesomeIcon icon="fa-solid fa-clock" /> Aukioloajat</dt>
                            <dd>
                                <span className="span-container">
                                    <span>Ma-Pe</span>
                                    <span>8-16</span>
                                </span>

                                <span className="span-container">
                                    <span>La</span>
                                    <span>8-14</span>
                                </span>

                                <span className="span-container">
                                    <span>Su</span>
                                    <span>Suljettu</span>
                                </span>
                            </dd>
                        </dl>
                    </div>
                    <div className="footer-yhteystiedot col-md-3 col-6 mt-3">
                        <dl>
                            <dt><FontAwesomeIcon icon="fa-solid fa-circle-info" /> Yhteystiedot</dt>
                            <dt className="my-2">Myymälä</dt>
                            <dd>
                                <span><FontAwesomeIcon icon="fa-solid fa-phone" /> 050 453 543</span>
                                <span><FontAwesomeIcon icon="fa-solid fa-envelope" /> myynti@angularbike.fi</span>

                            </dd>
                            <dt className="my-2"> Huolto</dt>
                            <dd>
                                <span><FontAwesomeIcon icon="fa-solid fa-phone" /> 050 123 123</span>
                                <span><FontAwesomeIcon icon="fa-solid fa-envelope" /> huolto@angularbike.fi</span>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="row">
                <div className="col-12 col-md-6 footer-logos">
                <img src={logo} alt="conpany logo"></img>
                <ul>
                    <li><FontAwesomeIcon icon="fa-brands fa-facebook"size="3x" /></li>
                    <li><FontAwesomeIcon icon="fa-brands fa-square-instagram"size="3x" /></li>
                    <li><FontAwesomeIcon icon="fa-brands fa-youtube"size="3x" /></li>
                    <li><FontAwesomeIcon icon="fa-brands fa-twitter" size="3x"/></li>
                </ul>
                </div>
                <div className="col-12 col-md-6 quote mt-3">
                <p><q>I feel like an artist and my bicycle is the brush</q>-Scott Stoll</p>
                </div>
                </div>
             <div>
        </div>
      </div>
        </footer>
    )
}


export default Footer