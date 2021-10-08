import React from 'react';
import "../style/market.scss";
import {Link} from "react-router-dom";

function Market(props) {
    const [check, setCheck]=React.useState(false);
    return (
        <div className="market-page">
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
            <div className={`market-content ${check? "checked": ""}`}>
                <div className="show "></div>
                <h2 className="text-center">Here can me mint <br/> Bear Market Bar NTF</h2>
                <div className="market-img d-flex justify-content-center">
                    <div className="market-img-content">
                        <img src="/images/1.png" alt="no image"/>
                    </div>
                </div>
                <p className='text-center'>Price 2 SOL(1 NTF per transaction)</p>
                <button onClick={()=>setCheck(!check)}>
                    connect wallet
                    <div className="select">
                        <p>Select you wallet:</p>
                        <ul className="list-unstyled m-0">
                            <li className="d-flex align-items-center">
                                <div className="icon">
                                    <img src="/images/Group 180.svg" alt="no image"/>
                                </div>
                                <p className="mb-0">Phantom</p>
                            </li>
                            <li className="d-flex">
                                <div className="icon">
                                    <img src="/images/Group 181.svg" alt="no image"/>
                                </div>
                                <p className="mb-0">Solflare</p>
                            </li>
                            <li className="d-flex">
                                <div className="icon">
                                    <img src="/images/Group 182.svg" alt="no image"/>
                                </div>
                                <p className="mb-0">Sollet</p>
                            </li>
                        </ul>
                    </div>
                </button>
            </div>
            <div className="ninja-marker">
                <div className="container">
                    <p>© 2021 Ninja marker</p>
                </div>
            </div>
        </div>
    );
}

export default Market;