import React from 'react';
import "../style/main.scss"
import Map from "./map";
import {Link} from 'react-router-dom'
const Main = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="bear-market-bar">
                    <div className="row">
                        <div className="col-6">
                                <div>
                                    <h3>Bear Market <br/> Bar - Game NFT collection</h3>

                                    <p>Limited <span>10,000</span> unique NFT Bears collection <br/> powereded by Solana blockchain. The main part <br/> of the Play to Earn BMB Games. <span>PRICE: 2 SOL = 1 NFT BEAR</span></p>

                                    <p>Only Bear owners will have access to BMB <br/> games, drops and other privileges.</p>

                                    <p>Bears are waiting for a bear market in their <br/> bar. They drink, fight and play their bar. They drink, fight and play their NFT-Games on Solana to earn money for whiskey.</p>
                                </div>
                        </div>
                        <div className="col-6">
                           <Link to="/market-page">
                               <div className="ninja-circle">

                                   <div className="d-flex justify-content-center">
                                       <img src="/images/ninja-circle.png" alt="ninja-circle"/>
                                   </div>
                                   <img src="/images/kitay-column.png" alt="kitay-column"/>

                               </div>
                           </Link>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center h-100">
                                <div>
                                    <h3>Bear Market Bar - <br/> Game NFT collection</h3>

                                    <p>Limited <span>10,000</span> unique NFT Bears collection powereded by <br/> Solana blockchain. The main part of the Play to Earn <br/> BMB Games. <span>PRICE: 2 SOL = 1 NFT BEAR</span></p>

                                    <p>Only Bear owners will have access to BMB games, drops <br/> and other privileges.</p>

                                    <p>Bears are waiting for a bear market in their bar. They <br/> drink, fight and play their bar. They drink, fight and play their NFT-Games on Solana to earn money for whiskey.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collection">
                    <div className="row">
                        <div className="col-10 offset-1">
                            <h1>BMB NFT collection</h1>
                            <p>10,000 unique NFTs generated from 220 hand-drawn features. <span>PRICE: 2 SOL = 1NFT Bear.</span>
                                <br/> The public-sale will have a limit of 1 Bears per transaction. <br/> The rarity will be revealed after the sale</p>
                        </div>
                        <div className="col-4">
                            <div  className="ninja-circle">
                                <div className="d-flex justify-content-center">
                                    <img className="kitay-column-top" src="/images/kitay-column-top.png" alt="kitay-column-top"/>
                                </div>

                                <img className="ninja-left" src="/images/ninja-left.png" alt="ninja-left"/>

                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ninja-circle">

                                <img className="circle" src="/images/circle.png" alt="circle"/>
                                <img className="building" src="/images/building.png" alt="building"/>
                                <img className="ninja-sword" src="/images/ninja-sword.png" alt="ninja-sword"/>

                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ninja-circle">

                                <div className="d-flex justify-content-center">
                                    <img className="ninja-top" src="/images/ninja-top.png" alt="ninja-top"/>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <img className= "kitay-column-bottom" src="/images/kitay-column-bottom.png" alt="kitay-column-bottom"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="gallery">
                    <div className="row">
                        <div className="col-10 offset-1">
                            <h1>BMB NFT gallery</h1>
                        </div>
                        <div className="col-5">
                            <img src="/images/ninja-moon.png" className="w-100 h-100" alt="ninja-moon"/>
                            <img src="/images/ninja-moon-p.png" className="ninja-moon-p" alt="ninja-moon-p"/>
                        </div>
                        <div className="col-5">
                            <img src="/images/ninja-sunday.png" className="w-100 h-100" alt="ninja-sunday"/>
                            <img src="/images/ninja-sunday-p.png" className="ninja-sunday-p" alt="ninja-sunday-p"/>
                        </div>
                        <div className="col-2 formedia1">
                            <img src="/images/ninja-moonday.png" className="h-100 ninja-moonday" alt="ninja-moonday"/>
                            <img src="/images/ninja-moonday-p.png" className="ninja-moonday-p" alt="ninja-moonday-p"/>
                        </div>
                        <div className="col-2 formedia">
                            <img src="/images/ninja-moonday-pt.png" className="h-100 ninja-moonday" alt="ninja-moonday"/>
                            <img src="/images/ninja-moonday-p.png" className="ninja-moonday-p" alt="ninja-moonday-p"/>
                        </div>
                    </div>
                </div>
                <div className="games-world">
                    <div className="row">
                        <div className="col-6  d-flex align-items-center justify-content-end">
                            <div>
                                <h3>BMB Games <br/> World</h3>

                                <p>We have almost finished a simple NFT game, in which you  will be able to wander through mazes, pass levels, collect <br/> crystals and earn NFT and cryptocurrency.</p>

                                <p>But we have a much larger project in our plans. Now we <br/> can say that is a BMB world that you will explore, <br/> fight monsters and earn money. Very soon we will show <br/> the gameplay from the new game.</p>
                            </div>

                        </div>
                        <div className="col-6 ">

                            <div className="row">
                                <div className="col-6">
                                    <div className="ninja-circle">

                                        <div className="d-flex justify-content-center">
                                            <img className="ninja-top" src="/images/ninja-top.png" alt="ninja-top"/>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <img className="kitay-column-bottom" src="/images/kitay-column-bottom.png" alt="kitay-column-bottom"/>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="ninja-circle">

                                        <img className="circle" src="/images/circle.png" alt="circle"/>
                                        <img className="building" src="/images/building.png" alt="building"/>
                                        <img className="ninja-sword" src="/images/ninja-sword.png" alt="ninja-sword"/>

                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="ninja-circle">

                                        <img className="kitay-column-left" src="/images/kitay-column-left.png" alt="kitay-column-left"/>
                                        <img className="ninja-right" src="/images/ninja-right.png" alt="ninja-right"/>

                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="ninja-circle">

                                        <img className="building-half" src="/images/building-half.png" alt="building-half"/>

                                        <img className="ninja-top-right" src="/images/ninja-top-right.png" alt="ninja-top-right"/>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Map/>
                <div className="team-bears">
                    <di className="row">
                        <div className="col-10 offset-1">
                            <h1>Team of bears</h1>
                        </div>
                        <div className="col-md-4">

                            <div className="ninja-circle">

                                <div className="d-flex justify-content-center">
                                    <img className="kitay-column-top" src="/images/kitay-column-top.png" alt="kitay-column-top"/>
                                </div>

                                <img className="ninja-right" src="/images/ninja-right.png" alt="ninja-right"/>

                            </div>

                            <h3>Heisenberg</h3>
                            <p><span>CEO |</span> Teacher. Organized and NFT Game gang</p>

                        </div>
                        <div className="col-md-4">

                            <div className="ninja-circle">

                                <img className="circle" src="/images/circle.png" alt="circle"/>
                                <img className="building" src="/images/building.png" alt="building"/>
                                <img className="ninja-left-sward" src="/images/ninja-left-sward.png" alt="ninja-left-sward"/>

                            </div>

                            <h3>Crptodavinci</h3>
                            <p><span>Artist |</span> Leonardo da Vinci in a previous life</p>

                        </div>
                        <div className="col-md-4">

                            <div className="ninja-circle">

                                <div className="d-flex justify-content-center">
                                    <img className="ninja-top" src="/images/ninja-top.png" alt="ninja-top"/>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <img className="kitay-column-bottom" src="/images/kitay-column-bottom.png" alt="kitay-column-bottom"/>
                                </div>

                            </div>

                            <h3>NeeOn</h3>
                            <p><span>Hacker |</span> We all live in the matrix</p>

                        </div>
                        <div className="col-md-4">

                            <div className="ninja-circle">

                                <div className="d-flex justify-content-center">
                                    <img className="ninja-top2" src="/images/ninja-top-red.png" alt="ninja-top-red"/>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <img className="kitay-column-bottom2" src="/images/kitay-column-bottom.png" alt="kitay-column-bottom"/>
                                </div>

                            </div>

                            <h3>Octopus</h3>
                            <p><span>Game Designer |</span> 5 years of experience. 5 y.o</p>
                        </div>
                        <div className="col-md-4">

                            <div className="ninja-circle">

                                <div className="d-flex justify-content-center">
                                    <img className="kitay-column-top" src="/images/kitay-column-top.png" alt="kitay-column-top"/>
                                </div>

                                <img className="ninja-left" src="/images/ninja-left.png" alt="ninja-left"/>

                            </div>

                            <h3>Alex</h3>
                            <p><span>Game Developer |</span> 6 years of experience and scoliosis</p>
                        </div>
                        <div className="col-md-4">

                            <div className="ninja-circle">

                                <img className="circle" src="/images/circle.png" alt="circle"/>
                                <img className="building" src="/images/building.png" alt="building"/>
                                <img className="ninja-sword" src="/images/ninja-sword.png" alt="ninja-sword"/>

                            </div>

                            <h3>Dude</h3>
                            <p><span>SMM |</span> He lives with his mother</p>
                        </div>
                        <div className="col-12">
                            <p>© 2021 Ninja marker</p>
                        </div>
                    </di>
                </div>
            </div>

        </div>
    );
};

export default Main;