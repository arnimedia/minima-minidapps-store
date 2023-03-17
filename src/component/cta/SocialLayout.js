import React from 'react';
// import { Fade } from "react-awesome-reveal";
import { Reveal } from "react-awesome-reveal";
import { revealAnim } from '../../utils';

const CtaLayoutOne = () => {

    return (
        <>
            <div className='section section-padding color-social p--0'>
                <Reveal keyframes={revealAnim}>
                    <div className='container social'>
                        <div className='social-title'>
                            <h4>Join the community</h4>
                        </div>
                        <div className='social-icons'>
                            <a href="https://discord.com/invite/minima" className='minima-btn btn-outlined-social' target="_blank" rel="noopener noreferrer">Discord</a>
                            <a href="https://t.me/Minima_Global" className='minima-btn btn-outlined-social' target="_blank" rel="noopener noreferrer">Telegram</a>
                            <a href="https://github.com/minima-global" className='minima-btn btn-outlined-social' target="_blank" rel="noopener noreferrer">Github</a>
                            <a href="https://twitter.com/Minima_Global" className='minima-btn btn-outlined-social' target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a href="https://www.youtube.com/channel/UCDe2j57uQrUVtVizFbDpsoQ" className='minima-btn btn-outlined-social' target="_blank" rel="noopener noreferrer">YouTube</a>
                            <a href="https://newsletter.minima.global/" className='minima-btn btn-outlined-social' target="_blank" rel="noopener noreferrer">Substack</a>
                            <a href="https://coinmarketcap.com/currencies/minima-global/" className='minima-btn btn-outlined-social' target="_blank" rel="noopener noreferrer">CoinMarketCap</a>
                            <a href="https://www.coingecko.com/en/coins/minima" className='minima-btn btn-outlined-social' target="_blank" rel="noopener noreferrer">CoinGecko</a>
                        </div>
                    </div>
                </Reveal>
            </div>
            <div className='section section-padding color-gray-download p--0'>
                <Reveal keyframes={revealAnim}>
                    <div className='container social-download'>
                        <div className='download-copy'>A simple app download is all you need to run a complete blockchain node on your device.</div>
                        <div className='download-button'>
                        <a className="minima-btn btn-fill-orange-medium" href="https://play.google.com/store/apps/details?id=com.minima.android&gl=GB&pli=1" target="_blank" rel="noopener noreferrer">Download app</a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </>
    )

}

export default CtaLayoutOne;