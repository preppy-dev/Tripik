import React from 'react'
import Header from "../components/Header";
import fb from './../assets/fb.svg';
import tw from './../assets/Twitter.svg';
import In from './../assets/instagram.svg'
import PostImg from './../assets/blogexample.jpg'
import Footer from "../components/Footer";
import BlogCards from "../components/BlogCards";

function BlogTemplate({title}) {
  return (
    <div className="blog">
    <div className="header_color">
    <Header/>
    </div>
    <div className="blog-title-social">
        <div className="socicals">
            <div className="social">
             <img src={fb} alt="facebook"/>
            </div>
            <div className="social">
             <img src={tw} alt="Twitter"/>
            </div>
            <div className="social">
             <img src={In} alt="Instagram"/>
            </div>
         </div>
    <div className="blog-title">
        <h1>{title}</h1>
    </div>
    </div>

    <BlogCards PostImg={PostImg}/>
    <Footer />
  </div>
  )
}

export default BlogTemplate
