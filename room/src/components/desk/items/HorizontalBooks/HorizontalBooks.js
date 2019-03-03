import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/13-horizontalBooks.svg';
import classes from './HorizontalBooks.css';
import Modal from '../../../../UI/Modal/Modal';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';

const HorizontalBooks = (props) => (
    <Auxiliary>
        <div className={classes.HorizontalBooks} onClick={props.zoomIn}>
            <ReactSVG
                src={svg}
                svgStyle={{ width: 160 }} />
        </div>
        <Modal
            visible={props.elementZoomed}
            closeModal={props.zoomOut}
            nightMode="true"
            width="600px"
            left="calc(50% - 300px)"
        >
            <div style={{color: 'white'}}><p>Desk Books</p></div>
        </Modal>
    </Auxiliary>
);
export default HorizontalBooks;