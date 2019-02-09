import React, { Component } from 'react';
import Layout from '../../hoc/Layout/Layout';
import classes from './HowItWorks.css'
import Footer from '../../Shared/Footer/Footer';

class HowItWorks extends Component {

    componentWillMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Layout>
                <div className={classes.Chunk1}>
                    <h1>TOUR</h1>
                </div>
                <Footer />
            </Layout>
        );
    }
}

export default HowItWorks;