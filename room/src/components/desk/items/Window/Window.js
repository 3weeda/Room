import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/18-window.svg';
import classes from './Window.css'
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';
import Modal from '../../../../UI/Modal/Modal';

const Windo = (props) => (
    <Auxiliary>
        <div className={classes.Windo} onClick={props.zoomIn}>
            <ReactSVG
                src={svg}
                svgStyle={{ width: 250 }}
                svgClassName={classes.Window} />
        </div>
        <Modal
            visible={props.elementZoomed}
            closeModal={props.zoomOut}
            nightMode={props.nightMode}
            width="800px"
            left="calc(50% - 400px)"
        >
            <div style={{color: 'white'}}><p>Window</p></div>
        </Modal>
    </Auxiliary>
);
export default Windo;