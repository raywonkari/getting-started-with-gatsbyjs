import React from "react"
import Layout from "../components/layout.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function pageTwo() {
    return(
        <div>
            <Layout>
            <div style={{margin: '300px', textAlign: 'center'}}>
                <h2>This is my second page</h2>
            </div>
            </Layout>
        </div>
    )
}

export default pageTwo;