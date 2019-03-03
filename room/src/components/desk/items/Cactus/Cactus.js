import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/14-cactus.svg';
import classes from './Cactus.css'
import Modal from '../../../../UI/Modal/Modal';

const Cactus = (props) => (
    <div className={classes.box}>
        <div className={classes.Cactus} onClick={props.zoomIn}>
            <ReactSVG
                src={svg}
                svgStyle={{ width: "45" }} />
        </div>
        <Modal
            visible={props.elementZoomed}
            closeModal={props.zoomOut}
            nightMode="true"
            width="600px"
            left="calc(50% - 300px)"
        >
            <div style={{color: 'white'}}><p>Cactus</p></div>
        </Modal>
    </div>
);
export default Cactus;

