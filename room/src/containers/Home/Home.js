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
        const text = (
            <Auxiliary>
                <p className={classes.P}> Unclutter your life, keep track of everything <br />
                    in one place, enjoy your peace of mind.</p>
                <button className={classes.Button1}><Link to="/signup">Get started - It's free</Link></button>
                <p className={classes.SmallP}> Have an account? <Link to="/login">Log in!</Link></p>
            </Auxiliary>
        )
        let chunk0Text = text;
        if (this.state.NarrowViewPort) {
            chunk0Text = (
                <section className={classes.Chunk} style={{ backgroundColor: "#fff2f2", height: "180px" }}>
                    <div className={classes.NarrowViewPortText}>
                        {text}
                    </div>
                </section>
            )
        }

        return (
            <Layout transparent={this.state.transparent}>
                <div className={classes.Home}>
                    {/* Chunk0 */}
                    <section className={classes.Chunk0}>
                        <div>
                            <img className={classes.Image} src={Bg} alt="" />
                            <div className={classes.Chunk0Text}>
                                <h2>All you need, <span>All in one place...</span></h2>
                                {!this.state.NarrowViewPort ? chunk0Text : null}
                            </div>
                        </div>
                    </section>
                    {/* Chunk0 cont. narrow viewport */}
                    {this.state.NarrowViewPort ? chunk0Text : null}
                    {/* Chunk1 */}
                    <section className={classes.Chunk} style={{ backgroundColor: "#111319" }}>
                        <div className={classes.Chunk1}>
                            <div>
                                <img src={require("../../assets/png/idea.png")} alt='Digitize your thoughts' />
                                <h4>Digitize your thoughts</h4>
                                <p>Capture and organize notes, files, photos, and voice memos in one place.</p>
                            </div>
                            <div>
                                <img src={require("../../assets/png/smartphone.png")} alt='Access anywhere' />
                                <h4>Access anywhere</h4>
                                <p>Find everything instantly on any device you have, no matter where you are.</p>
                            </div>
                            <div>
                                <img src={require("../../assets/png/box.png")} alt="Relaxe, it's safe   " />
                                <h4>Relax, it's safe</h4>
                                <p>Safe, secure cloud storage always keeps your information protected and private.</p>
                            </div>
                        </div>
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