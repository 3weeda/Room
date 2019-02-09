import React from 'react';
import Layout from '../../hoc/Layout/Layout';
import Footer from '../../Shared/Footer/Footer';
import classes from './About.css'

const About = () => {
    return (
        <Layout>
            <div className={classes.Chunk1}>
                <h1>ABOUT</h1>
            </div>
            <Footer />
        </Layout>
    );
};

export default About;