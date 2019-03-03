import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/5-kandle.svg';
import classes from './Kandle.css'
import Modal from '../../../../UI/Modal/Modal';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';

const Kandle = (props) => (
    <Auxiliary>
        <div className={classes.Kandle} onClick={props.zoomIn}>
            <ReactSVG
                src={svg}
                svgStyle={{ width: 35 }} />
        </div>
        <Modal
            visible={props.elementZoomed}
            closeModal={props.zoomOut}
            nightMode="true"
            width="600px"
            left="calc(50% - 300px)"
        >
            <div style={{ color: 'white' }}><p>Kandle</p></div>
        </Modal>
    </Auxiliary>
);
export default Kandle;