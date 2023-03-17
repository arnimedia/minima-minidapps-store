import React, {useState, useEffect} from 'react';
import MiniDappsItem from './minidappsProp/MiniDappsItem';
import { Reveal } from "react-awesome-reveal";
import { revealAnim } from '../../utils';
// import miniData from '../../data/dapps.json';
import Loader from '../../elements/loader/Loader';
import axios from 'axios';


const MiniDappsHome = ({parentClass, colSize, columnGap}) => {

	const mdData = "https://minidapps.minima.global/data/dapps.json";
  // const mdData = miniData;
	const [MiniDappsData, setMiniDappsData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(()=>{
    // setMiniDappsData(mdData.dapps);
    // setIsLoading(false);
    axios.get(mdData)
    .then (
      (res)=>{
        // console.log(res.data.dapps);
        setMiniDappsData(res.data.dapps);
				setIsLoading(false);
      }
    )
  },[]);
	
    return (
		<>
			<div className={`section section-padding-2 ${parentClass ? parentClass : ""}`}>
                <div className="container minidapps mt--40 mb--40">
                  <Reveal keyframes={revealAnim} triggerOnce>
                    <div className="section-heading heading-center">
                      <h2 className="title">
                        Download the<br /> official<br /> Minima MiniDapps
                      </h2>
                      <div className="subtitle"></div>
                      <p>To use MiniDapps you must be<br/> running a Minima node<br/> on Android,<br/> desktop or server.</p>
                    </div>
									</Reveal>
                  <Reveal keyframes={revealAnim} triggerOnce>
                    <div className="row text-center minidapps-sub-content">
                          <div className="col-lg-6 minidapps-sub-content-buttons">
                            <a className="minima-btn btn-fill-white-medium" href="https://docs.minima.global/docs/runanode/get_started_in_3_steps" target="_blank" rel="noopener noreferrer">Run a node</a>
                            <a className="minima-btn btn-outlined-medium" href="https://docs.minima.global/docs/runanode/usingminidapps" target="_blank" rel="noopener noreferrer">Learn more</a>
                          </div>
                          <div className="col-lg-8 col-md-6 minidapps-sub-content-sub-copy mt--20 mb--40">
                              Once downloaded, MiniDapps can be installed from the Android app Home screen or from the MiniDapp Hub on a desktop or server node.
                          </div>
                    </div>
                  </Reveal>
                    <div className={`row dapps-column ${columnGap ? columnGap : "row-35"}`}>
                      {MiniDappsData.map((data, index) => (
                        <div className={colSize ? colSize : "col-lg-6 col-md-9 col-sm-12"} key={index}>
                          {isLoading ? <Loader /> : <MiniDappsItem projectStyle="" minidappsitem={data} />}
                        </div>
                      ))}
                    </div>
                </div>
      </div>
		</>
    )
}

export default MiniDappsHome;