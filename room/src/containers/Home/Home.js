import React, { Component } from 'react';
import Bg from '../../assets/images/freddie-pngcompressedfinal.png';
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
            const isTop = window.scrollY < 100;
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
                    <section className={classes.Chunk0}>
                        <div>
                            <img className={classes.Image} src={Bg} alt="" />
                        <div className={classes.Chunk0Text}>
                            <h2>All you need,<br /> All in one place... </h2>
                            <p> Unclutter your life, keep track of everything <br />
                                in one place, enjoy your peace of mind.</p>
                            <button className={classes.Button}>Get started - It's free</button>
                        </div>
                        </div>
                    </section>
                    <section className={classes.Chunk} style={{ backgroundColor: "#111319" }}>
                        <div></div>
                    </section>
                    <section className={classes.Chunk} style={{ backgroundColor: "#fff2f2" }}>
                        <div></div>
                    </section>
                    <section className={classes.Chunk} style={{ backgroundColor: "#fff2f2" }}>
                        <div></div>
                    </section>
                    <section className={classes.Chunk} style={{ backgroundColor: "#111319", height: "300px" }}>
                        <div></div>
                    </section>

                </div>
            </Layout>
        );
    }
}

export default Home;