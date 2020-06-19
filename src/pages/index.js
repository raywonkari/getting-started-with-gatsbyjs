import React from "react"
import Layout from "../components/layout.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "../images/image.jpg";

export default function Home() {
  return(
    <div>
      <Layout>
        <div style={{margin: '100px', textAlign: 'center'}}>
          <h2>This is my home page</h2>
          <br/>
          <img src={image} alt="coverimage"></img>
          <br/>
          Photo by <a href="https://unsplash.com/@igormiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Igor Miske</a> on <a href="https://unsplash.com/s/photos/website?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </div>
      </Layout>
    </div>
  )
}
