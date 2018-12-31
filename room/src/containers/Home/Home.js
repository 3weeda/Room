import React, { Component } from 'react';
import Bg from '../../assets/images/freddie-png compressed final.png';
import classes from './Home.css';
import Layout from '../../hoc/Layout/Layout';

class Home extends Component {
    state = {
        transparent: true,
        isTop: true,
    }
    componentWillMount() {
        window.scrollTo(0, 0)
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 130;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
                this.setState(prevState => ({
                    transparent: !prevState.transparent
                }))
            }
        })
    }

    showToolbarBgHandler = () => {
        this.setState(prevState => ({
            transparent: !prevState.transparent
        }))
    }

    render() {
        return (
            <Layout transparent={this.state.transparent}>
                <div className={classes.Home}>
                    <img className={classes.Image} src={Bg} alt="" />
                    <div className={classes.Chunk1}></div>
                    <div className={classes.Chunk1}></div>
                </div>
            </Layout>
        );
    }
}

export default Home;