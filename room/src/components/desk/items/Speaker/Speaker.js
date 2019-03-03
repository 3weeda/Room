import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/16-speaker.svg';
import classes from './Speaker.css'
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';
import Modal from '../../../../UI/Modal/Modal';

const Speaker = (props) => (
    <Auxiliary>
        <div className={classes.box1} onClick={props.zoomIn}>
            <ReactSVG
                src={svg}
                svgStyle={{ width: 45 }} />
        </div>
        <div className={classes.box2} onClick={props.zoomIn}>
            <ReactSVG
                src={svg}
                svgStyle={{ width: 45 }} />
        </div>
        <Modal
            visible={props.elementZoomed}
            closeModal={props.zoomOut}
            nightMode="true"
            width="600px"
            left="calc(50% - 300px)"
        >
            <div style={{color: 'white'}}><p>Speakers</p></div>
        </Modal>
    </Auxiliary>
);
export default Speaker;