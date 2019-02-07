import React from 'react';
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import ReactSVG from 'react-svg';
import svg from '../../assets/svg/23-xMark.svg'
const Modal = (props) => {
    return (
        <Auxiliary>
            <Backdrop visible={props.visible} clicked={props.closeModal} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.visible ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.visible ? '1' : '0',
                    backgroundColor: props.nightMode ? '#111319' : 'white'
                }}
            >
                <div onClick={props.closeModal}>
                    <ReactSVG
                        src={svg}
                        svgStyle={{ width: 15, fill: props.nightMode ? 'white' : '#111319' }}
                        svgClassName={classes.Close}
                    />
                </div>
                {props.children}
            </div>
        </Auxiliary>

    );
};

export default Modal;