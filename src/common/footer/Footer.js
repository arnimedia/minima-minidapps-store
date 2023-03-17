import React from 'react';
import Logo from '../../elements/logo/Logo';
import { Fade } from "react-awesome-reveal";

const FooterOne = ({parentClass}) => {
    
    return (
        <footer className={`footer-area mt--80 ${parentClass}`}>
            <Fade triggerOnce>
            <div className="container">
                <div className="footer-main">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="footer-widget border-end">
                                <div className="footer-brand">
                                    <div className="footer-logo">
                                        <Logo limage="/images/minima_logo.svg"
                                        dimage="/images/minima_logo.svg"
                                        simage="/images/minima_logo.svg"
                                        />
                                    </div>
                                    <p className="strap-line">The evolution will not be centralized.<br />
                                    <span>Become part of it.</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Services</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><a href="https://www.minima.global/run-a-node" target="_blank" rel="noopener noreferrer">Run a node</a></li>
                                                <li><a href="https://www.minima.global/#technical-papers" target="_blank" rel="noopener noreferrer">Technical papers</a></li>
                                                <li><a href="https://www.minima.global/get-involved#faqs" target="_blank" rel="noopener noreferrer">FAQs</a></li>
                                                <li><a href="https://www.minima.global/blog" target="_blank" rel="noopener noreferrer">Blog</a></li>
                                                <li><a href="https://www.minima.global/news" target="_blank" rel="noopener noreferrer">News</a></li>
                                                <li><a href="https://www.minima.global/media-kit" target="_blank" rel="noopener noreferrer">Media kit</a></li>
                                                <li><a href="https://docs.minima.global/docs/minimatermsandconditions/" target="_blank" rel="noopener noreferrer">Terms & conditions</a></li>
                                                <li><a href="https://docs.minima.global/docs/minimaprivacypolicy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Social</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                            <li><a href="https://discord.com/invite/minima" target="_blank" rel="noopener noreferrer">Discord</a></li>
                                            <li><a href="https://t.me/Minima_Global" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                                            <li><a href="https://twitter.com/Minima_Global" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                            <li><a href="https://www.youtube.com/channel/UCDe2j57uQrUVtVizFbDpsoQ" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                                            <li><a href="https://coinmarketcap.com/currencies/minima-global/" target="_blank" rel="noopener noreferrer">CoinMarketCap</a></li>
                                            <li><a href="https://www.coingecko.com/en/coins/minima" target="_blank" rel="noopener noreferrer">CoinGecko</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom"> 
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-copyright">
                                <span className="copyright-text"> All rights reserved Minima Global Ltd © {new Date().getFullYear()}.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
        </footer>
    )
}

export default FooterOne;