function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-tuoteryhma">
                    <ul className="footer-ul">
                        <li>Tuotegategoriat</li>
                        <li>Maastopyörät</li>
                        <li>Sähköpyörät</li>
                        <li>Maantiepyörät</li>
                        <li>Lastenpyörät</li>
                        <li>Tarvikkeet</li>
                    </ul>
                </div>
                <div className="footer-myymala">
                    <dl>
                        <dt>Myymälä</dt>
                        <dd>
                            <span>Herkola 12</span>
                            <span>01235 Naantali</span>
                        </dd>
                        <dt>Aukioloajat</dt>
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
                        <dt>puh.</dt>
                        <dd>050 453 543</dd>
                        <dt>Email</dt>
                        <dd>myynti@angularbike.fi</dd>
                    </dl>
                </div>
                <div className="footer-huolto">
                    <dl>
                        <dt>Huolto</dt>
                        <dd>
                            <span>Mallitie 22</span>
                            <span>01235 Naantali</span>
                        </dd>
                        <dt>Aukioloajat</dt>
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
                        <dt>puh.</dt>
                        <dd>050 123 123</dd>
                        <dt>Email</dt>
                        <dd>huolto@angularbike.fi</dd>
                    </dl>
                </div>
                <div className="footer-some">
                    <ul className="footer-ul">
                        <li>Some</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>linkedin</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}


export default Footer