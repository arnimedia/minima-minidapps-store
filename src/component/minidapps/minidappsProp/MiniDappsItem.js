import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa';
import { Reveal } from "react-awesome-reveal";
import { revealAnim } from '../../../utils';

const MiniDappsItem = ({projectStyle, minidappsitem}) => {
	const [showContent, setShowContent] = useState(false)
	const [showCopy, setShowCopy] = useState(false)
	const changelogContent = React.useRef(null)
	const changelogHistory = React.useRef(null)

	function handleContent(){
		if(showCopy)toggleCopy();
		setShowContent(!showContent);
		setShowCopy(false);

		const content = changelogContent.current;
		content.classList.toggle('show');
	}

	function toggleCopy(){
		const content = changelogHistory.current;
		content.classList.toggle('show');
	}

	function handleCopy(){
		setShowCopy(!showCopy);
		toggleCopy();
	}
	
    return (
		<>
		<Reveal keyframes={revealAnim} triggerOnce>
				<div className={`minidapps-grid minidapps-style ${projectStyle}`}>
					<div className="thumbnail">
						<img src={process.env.PUBLIC_URL + minidappsitem.icon} alt="icon" />
					</div>
					<div className="content">
						<h4 className="title"> 
							{minidappsitem.name} {minidappsitem.version} 
						</h4>
						<span className="description">
							{minidappsitem.description}
						</span>
						<span className="update">
							Updated: {minidappsitem.date}
						</span>
						<div className="mini-info">
							<a className="minima-btn btn-fill-blue btn-small get" onClick={() => { window.location.href = minidappsitem.file; } }>Get</a>
							<a className="minima-btn btn-small readmore" onClick={handleContent}>Read {showContent ? "less" : "more"}</a>
						</div>
					</div>
					<div ref={changelogContent} className={`changelog`}>
							
							<a className={`minima-btn btn-small btn-white btn-fluid ${minidappsitem.history.length > 0 ? "" : "hide"}`} onClick={handleCopy}>Version history <div className={`changelog-icon ${showCopy ? "show" : ""}`}><FaAngleDown /></div></a>
							<div ref={changelogHistory} className={`changelog-copy`}>
								<div>
									{minidappsitem.history.map((data, index) =>(
											<div key={index}>
												<div className={`changelog-copy-link`} onClick={() => { window.location.href = data.file; } }>{data.version}</div>
												<div className={`changelog-copy-update`}>{data.update}</div>
											</div>
									))}
								{minidappsitem.history.update}
								{minidappsitem.history.file}
								</div>
							</div>
							<div className='changelog-update'>
								<h6>What is {minidappsitem.name}:</h6>
								<p>{minidappsitem.about}</p>
								<h6>Updates include:</h6>
								<p>{minidappsitem.update}</p>
							</div>			
					</div>
				</div>
		</Reveal>
		</>
    )
}

export default MiniDappsItem;