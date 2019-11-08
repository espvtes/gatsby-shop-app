import React from "react"
import Layout from '../components/layout.js';
import { Link } from 'gatsby';
import indexStyles from '../styles/index.module.css';




const IndexPage = () => {
    return(
        <Layout>
                <div className="container pt-4">
                    <div className="row pt-4">
                        <div className="col-12">
                        <h1 className={indexStyles.title}>Welcome to BreatheCo<spam className="text-primary">.</spam>de</h1>
                        <h3 className="font-weigth-bolder text-center text-muted"><label className={indexStyles.smallTitle}>Learn and get better at coding, using technology.</label></h3>
                        </div>
                    </div>
                </div>
        </Layout>

    )
}

export default IndexPage
