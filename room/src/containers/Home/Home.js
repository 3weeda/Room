import React, { Component } from 'react';
import Bg from '../../assets/images/freddie-pngcompressedfinal.png';
import classes from './Home.css';
import Layout from '../../hoc/Layout/Layout';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {
        transparent: true,
        isTop: true,
        NarrowViewPort: false
    }
    componentWillMount() {
        window.scrollTo(0, 0)
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 30;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
                this.setState(prevState => ({
                    transparent: !prevState.transparent
                }))
            }
        })
        this.updateChunk0NarrowHandler();
        window.addEventListener("resize", this.updateChunk0NarrowHandler);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateChunk0NarrowHandler)
    }
    updateChunk0NarrowHandler = () => {
        this.setState({ NarrowViewPort: window.innerWidth < 652 })
    }

    showToolbarBgHandler = () => {
        this.setState(prevState => ({
            transparent: !prevState.transparent
        }))
    }

    render() {
        let text = (
            <Auxiliary>
                <p className={classes.P}> Unclutter your life, keep track of everything <br />
                    in one place, enjoy your peace of mind.</p>
                <Link to="/signup"><button className={classes.Button1}>Get started - It's free</button></Link>
                <p className={classes.SmallP}> Have an account? <Link to="/login">Log in!</Link></p>
            </Auxiliary>
        )
        if (this.state.NarrowViewPort) {
            text = (
                <section className={classes.Chunk} style={{ backgroundColor: "#fff2f2", height: "160px" }}>
                    <div className={classes.NarrowViewPortText}>
                        <p className={classes.P}> Unclutter your life, keep track of everything <br />
                            in one place, enjoy your peace of mind.</p>
                        <button className={classes.Button1}><Link to="/signup">Get started - It's free</Link></button>
                        <p className={classes.SmallP}> Have an account? <Link to="/login">Log in!</Link></p>
                    </div>
                </section>
            )
        }

        return (
            <Layout transparent={this.state.transparent}>
                <div className={classes.Home}>
                    <section className={classes.Chunk0}>
                        <div>
                            <img className={classes.Image} src={Bg} alt="" />
                            <div className={classes.Chunk0Text}>
                                <h2>All you need, <span>All in one place...</span></h2>
                                {!this.state.NarrowViewPort ? text : null}
                            </div>
                        </div>
                    </section>
                    {this.state.NarrowViewPort ? text : null}
                    <section className={classes.Chunk} style={{ backgroundColor: "#111319" }}>
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