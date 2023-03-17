import React from 'react';
import Logo from '../../elements/logo/Logo';
import StickyHeader from './StickyHeader';
import { Reveal } from "react-awesome-reveal";
import { revealAnim } from '../../utils';


const Header = () => {

    const sticky = StickyHeader(50);
    
    return (
        <>
            <header className="header minima-header header-style">
                <div className={`minima-mainmenu ${sticky.scrollStatus.scrollDirection === "up" ? "minima-sticky" : ""} ${sticky.scrollStatus.scrollDirection === "down" ? "top" : ""}` }>
                    <div className="container">
                        <div className="header-navbar">
                            <Reveal keyframes={revealAnim} triggerOnce>
                                <div className="header-logo">
                                    <Logo limage="/images/minima_logo.svg"
                                    dimage="/images/minima_logo.svg"
                                    simage="/images/minima_logo.svg"
                                    />
                                </div>
                            </Reveal>
                            <div className="header-main-nav">
                            </div>
                            <div className="header-action">
                                <ul className="list-unstyled">
                                    <Reveal keyframes={revealAnim} triggerOnce>
                                        <li className="header-btn">
                                            <a className="minima-btn btn-fill-white-medium" href="https://www.minima.global/run-a-node" target="_blank" rel="noopener noreferrer">Run a node</a>
                                        </li>
                                    </Reveal>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;