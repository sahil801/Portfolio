/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { GoDeviceDesktop } from 'react-icons/go';
import projectData from '../data/projects.json'

function Projetcs() {
    
    return (
        <section id="projects" className='projects'>
            <div className='container1'>
                <div class="section-title">
                    <h2>Projects</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className='row projectContainer'>
                    {projectData.map((project) => {
                        return (
                            <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 row icon-box' data-aos={project.dataaos}>
                                <div className='col-2 '>
                                    <i className='icon'><GoDeviceDesktop /></i>
                                </div>
                                <div className='col-10'>
                                    <h4 class="title"><a href="#">{project.title}</a></h4>
                                    <p class="description">{project.description}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default Projetcs
