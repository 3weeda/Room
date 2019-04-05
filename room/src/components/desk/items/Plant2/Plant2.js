import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/24-LowerLeftPlant.svg';
import classes from './Plant2.css'
import Modal from '../../../../UI/Modal/Modal';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';

const Plant2 = (props) => (
    <Auxiliary>
        <div className={classes.Plant} onClick={props.zoomIn}>
            <ReactSVG
                src={svg}
                svgStyle={{ width: 135 }} />
        </div>
        <Modal
            visible={props.elementZoomed}
            closeModal={props.zoomOut}
            nightMode="true"
            width="600px"
            left="calc(50% - 300px)"
        >
            <div style={{ color: 'white' }}><p>Plant22222</p></div>
        </Modal>
    </Auxiliary>
);
export default Plant2;