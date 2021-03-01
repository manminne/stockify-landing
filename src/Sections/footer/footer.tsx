import React, {Component} from "react";
import "./footer.css"
import {ReactComponent as StockifyLogo} from "../../assets/img/StockifyLogo.svg";
import {ReactComponent as GithubIcon} from "../../assets/img/github.svg";
import {ReactComponent as InstaIcon} from "../../assets/img/instagram.svg";
import {ReactComponent as RedditIcon} from "../../assets/img/reddit.svg";
import {ReactComponent as LinkedInIcon} from "../../assets/img/linkedin.svg";

interface AppState {

}

interface AppProps {


}



class Footer extends Component<AppProps, AppState> {
    constructor(props:AppProps) {
        super(props);
        this.state = {
        };
    };



    render() {
        return (
            <div className={"section footer-sec"}>
                <div className={"footer"}>
                    <div className={"footer-item first-footer-item"}>
                        <div>
                            <div className={"company-name"}>Stockify</div>
                            <div>
                                <button className={"contact-button"}>
                                    Contact us
                                </button>
                            </div>
                            <div>
                                <button className={"contact-button"}>
                                    The boring stuff
                                </button>
                            </div>

                        </div>

                    </div>
                    <div className={"footer-item"}>
                        <div className={"footer-page-overview"}>
                            <div className={"page-overview-item"}>Home</div>
                            <div className={"page-overview-item"}>Testimonials</div>
                            <div className={"page-overview-item"}>Get started</div>
                            <div className={"page-overview-item"}>Features</div>
                            <div className={"page-overview-item"}>Contact</div>

                        </div>
                    </div>
                    <div className={"footer-item"}>
                        <div className={"contact-and-social"}>
                            <div className={"social-icon-holder"}>
                                <a href=""><InstaIcon className={"social-icon"}/></a>
                            </div>
                            <div className={"social-icon-holder"}>
                                <a href=""><LinkedInIcon className={"social-icon"}/></a>
                            </div>
                            <div className={"social-icon-holder"}>
                                <a href=""><RedditIcon className={"social-icon"}/></a>
                            </div>
                            <div className={"social-icon-holder"}>
                                <a href=""><GithubIcon className={"social-icon"}/></a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }

}



export default Footer;
