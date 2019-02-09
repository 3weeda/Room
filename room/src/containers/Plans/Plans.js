import React, { Component } from 'react';
import Layout from '../../hoc/Layout/Layout';
import Footer from '../../Shared/Footer/Footer';
import classes from './Plans.css'

class Plans extends Component {
    render() {
        return (
            <Layout>
                <div className={classes.Chunk1}>
                    <h1>PLANS</h1>
                </div>
                <Footer />
            </Layout>
        );
    }
}

export default Plans;