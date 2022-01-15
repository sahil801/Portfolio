import React, { useEffect } from 'react'
import profileimg from '../assets/profile-img.jpeg';
import { AiOutlineCaretRight } from "react-icons/ai";
import AOS from 'aos';


function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  return (
    <section id="about" className='about '>
      <div className='container1'>
        <div class="section-title" >
          <h2>About</h2>
          <p>I am a <strong>web and user experience</strong> designer, living in <strong>Bhopal ,M.P.</strong><br />
            I am a pre final year undergraduate computer science student at<strong> IIIT bhopal </strong>pursuing <strong> B.Tech</strong> in <strong>computer science and engineering, </strong>
            currently working as a <strong>FrontEnd Devloper intern</strong> at <a href="https://hackerkernel.com/">HackerKernel, Bhopal</a>
          </p>
          {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
        </div>
        <div className='row'>
          <div className='col-lg-4' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={profileimg} data-aos="zoom-in" className="img-fluid rounded-circle" alt="" />
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" >
            <h3>FullStack Web Developer</h3>
            <p className="font-italic">
              Excellent problem-solving skills and ability to perform well in teams. Passionate and have extensive
              experience in Competitive Programming, A full-stack Web developer, Software development enthusiast, eager
              to learn and adapt to different environments, and determined to accept new challenges
            </p>
            <div class="row">
              <div class="col-lg-6" data-aos="fade-left">
                <ul>
                  <li><i><AiOutlineCaretRight /></i> <strong>Birthday:</strong> 8 August 2001</li>
                  <li><i><AiOutlineCaretRight /></i> <strong>Website:</strong> www.example.com</li>
                  <li><i><AiOutlineCaretRight /></i> <strong>Mobile:</strong> +91 9589415970</li>
                  <li><i><AiOutlineCaretRight /></i> <strong>City:</strong> Bhopal,MP</li>
                </ul>
              </div>
              <div class="col-lg-6" data-aos="fade-left">
                <ul>
                  <li><i><AiOutlineCaretRight /></i> <strong>Age:</strong> 21</li>
                  <li><i><AiOutlineCaretRight /></i> <strong>Degree:</strong> B.Tech.</li>
                  <li><i><AiOutlineCaretRight /></i> <strong>Email:</strong> devloper.sahil.88@gmail.com </li>
                  <li><i><AiOutlineCaretRight /></i> <strong>Work Status:</strong> Available</li>
                </ul>
              </div>
            </div>
            <p>
              I’m also an executive member of <b>Codame Club IIIT Bhopal ,which is one of the flagship clubs for like minded coding enthusiasts , where I worked as a problem setter for their coding contests.
            </p>
            <p>
              My hobbies are playing cricket , doing competitive coding,travelling and I also workout daily for a good balanced health.
            </p>
            <p>
              I strongly believe in team spirit and working hard for your goals, i think i will be an asset to hacker kernel and will learn and gain a lot from our team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
