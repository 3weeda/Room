import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/4-vase.svg';
import classes from './Vase.css'
import Modal from '../../../../UI/Modal/Modal';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';

const Vase = (props) => (
    <Auxiliary>
        <div className={classes.Vase} onClick={props.zoomIn}>
            <ReactSVG
                src={svg}
                svgStyle={{ width: 75 }} />
        </div>
        <Modal
            visible={props.elementZoomed}
            closeModal={props.zoomOut}
            nightMode="true"
            width="600px"
            left="calc(50% - 300px)"
        >
            <div style={{ color: 'white' }}><p>Vase</p></div>
        </Modal>

    </Auxiliary>
);
export default Vase;