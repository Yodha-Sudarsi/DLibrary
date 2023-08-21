import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About DLibrary</h2>
            <p className='fs-17'>DLibrary, short for Digital Library, is a virtual treasure trove of knowledge and information that's just a click away. It's like having a world of resources at your fingertips, accessible through your devices and the internet. Imagine being able to explore books, articles, videos, and research papers without leaving your room!DLibrary is a game-changer in the way we access information. Gone are the days of flipping through physical pages. With DLibrary, you can dive into a sea of knowledge in seconds. It's like having your personal library, tailor-made to suit your interests.
            One of the coolest things about DLibrary is that it breaks down barriers. You're not limited by location or distance. Whether you're in a bustling city or a quiet village, you can access the same resources as anyone else. It's a whole new level of inclusivity.</p>
            <p className='fs-17'>But DLibrary isn't just about convenience; it's also about sustainability. Say goodbye to stacks of paper. DLibrary promotes eco-friendly learning by reducing the need for printed materials. It's a win for both learning and the environment.Research and learning have also become more exciting. With advanced search tools, you can find exactly what you need in a sea of information. And that's not all – you can interact, bookmark, and even collaborate with others using DLibrary.

</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
