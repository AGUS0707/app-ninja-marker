import React from 'react';
import "../style/header.scss";
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div className="header">
            <div className="navigation-bar">
                <div className="container">
                    <div className="navbar navbar-expand-sm">
                        <Link to="/">
                            <div className="navbar-brand">
                                <img src="/images/Ninja marker.svg" alt="no image"/>
                            </div>
                        </Link>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#" className="nav-link">Mint</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Game</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Twitter</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Discord</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="section">
                <img className="subtract" src="/images/Subtract.png" alt=""/>
                <img className="kitay-column" src="/images/Vector1.png" alt=""/>
                <img className="vector" src="/images/Vector.png" alt=""/>
                <img className="Group" src="/images/Group.png" alt=""/>
                <img className="Group1" src="/images/Group1.png" alt=""/>
                <img className="ninja-header" src="/images/ninja-header.png" alt=""/>
                <img className="ninja-header1" src="/images/ninja-header1.png" alt=""/>
                <img className="grow" src="/images/grow.png" alt=""/>
            </div>

            <div className="sectionmedia">

                <img className="ninja-media" src="/images/ninja-media.png" alt=""/>
                <img className="building-media" src="/images/building-media.png" alt=""/>

            </div>
            {/*<div className="section">*/}
            {/*    <div className="section-content">*/}
            {/*       <div className="section-content1">*/}
            {/*           <div className="section-header">*/}
            {/*               <div className="row">*/}
            {/*                   <div className="col-sm-6 ">*/}
            {/*                       <div className="images-content">*/}
            {/*                           <img src="/images/Vector (7).png" alt="no image"/>*/}
            {/*                       </div>*/}
            {/*                       <div className="img-position">*/}
            {/*                           <img src="/images/Group.png" alt="no image"/>*/}
            {/*                       </div>*/}
            {/*                   </div>*/}
            {/*                   <div className="col-sm-6 p-0">*/}
            {/*                       <div className="images-content">*/}
            {/*                           <img src="/images/Group 108.png" alt="mo images"/>*/}
            {/*                       </div>*/}
            {/*                   </div>*/}
            {/*               </div>*/}
            {/*           </div>*/}
            {/*       </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="calendar">
                <img className="Group1media" src="/images/Group11.png" alt=""/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <ul className="list-unstyled d-flex">
                                <li>
                                    <h5>12</h5>
                                    <span className="d-block">дней</span>
                                </li>
                                <li>
                                    <h5>09</h5>
                                    <span className="d-block">часов</span>
                                </li>
                                <li>
                                    <h5>50</h5>
                                    <span className="d-block">минут</span>
                                </li>
                                <li>
                                    <h5>22</h5>
                                    <span className="d-block">секунд</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <p className="text-center">Mint will be opened on</p>
                            <h3 className="text-center">
                                September 30th
                            </h3>
                            <button className="mx-auto">MINT SOON</button>
                        </div>
                        <div className="col-sm-6">
                            <ul className="list-unstyled d-flex">
                                <li>
                                    <h5>12</h5>
                                    <span className="d-block">дней</span>
                                </li>
                                <li>
                                    <h5>09</h5>
                                    <span className="d-block">часов</span>
                                </li>
                                <li>
                                    <h5>50</h5>
                                    <span className="d-block">минут</span>
                                </li>
                                <li>
                                    <h5>22</h5>
                                    <span className="d-block">секунд</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Header;