import React, {Component} from "react";
import './herosec.css'
import HeroImg from "../../assets/img/Hero-Mockup.png";
import Button from "../Button/button";
import {ReactComponent as ArrowDown} from "../../assets/img/Down-Arrow.svg";

interface AppState {

}

interface AppProps {

}



class HeroSec extends Component<AppProps, AppState> {
    render() {
        return (
            <div>
                <div className={"section"}>
                    <div className={"container"}>

                        <div className={"hero-text"}>
                            <div className={"heading-holder"}>
                                <h1 className={"h1-primary"}>Understand your Portfolio</h1>
                                <h3 className={"h3-secondary"}>Why ETF Portfolios are not necessarily diversified</h3>
                                <div className={"button-group-desktop"}>
                                    <div className={"btn-holder-desktop"}>
                                        <Button text={"Download now"}/>

                                    </div>
                                    <div className={"btn-holder-desktop"}>
                                        <Button text={"Learn more"} style={{backgroundColor:"transparent", border:"1px solid #34CD9E", color:"#34CD9E"}}/>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={"hero-item"}>
                            <img src={HeroImg} className={"hero-img"}/>

                        </div>
                        <div className={"cta-container"}>
                            <div className={"button-group-mobile"}>
                                <div className={"btn-holder-mobile"}>
                                    <Button text={"Download now"}/>

                                </div>
                                <div className={"btn-holder-mobile"}>
                                    <Button text={"Learn more"} style={{backgroundColor:"transparent", border:"1px solid #34CD9E", color:"#34CD9E"}}/>

                                </div>
                            </div>
                        </div>



                    </div>

                </div>
                <div className={"normal_div"} style={{paddingTop: "2rem"}}>

                    <a href=""><ArrowDown/></a>
                </div>
            </div>


        );
    }

}



export default HeroSec;
