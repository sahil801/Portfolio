import React, { useState } from 'react'
import { ImLocation } from 'react-icons/im';
import { MdEmail ,MdCancel} from 'react-icons/md';
import {
    BsTelephoneFill
} from 'react-icons/bs';
import Mymap from './Mymap';

function Contact() {
    
    const [show,setShow] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const handleFormSubmit = async (e) => {
        setName(''); setEmail(''); setSubject(''); setMessage('');
        setShow(true);  
        e.preventDefault();
        let formData = { name, email, subject, message };
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(formData),
            redirect: 'follow'
        };

        await fetch("http://localhost:8001/sendMessage", requestOptions)
            .then(response => response.text())
            .catch(error => console.log('error', error));
          
    }
    return (
        <section className='contact' id='contact'>
            <div className='container1'>
                <div className='section-title res-ml-20'>
                    <h2>Contact</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className='row d-flex-center res-d-col' style={{ justifyContent: 'space-evenly' }}>
                    <div className=' col-lg-12 col-xl-5 d-flex-center resPadd-0'>
                        <div className='info '>
                        <div className="address row">
                            <div className='col-2'>
                                <i><ImLocation /> </i>
                            </div>
                            <div className='col-10'>
                                <h4>Location :</h4>
                                <p>Gram Kuchwada, Raisen, MP 464672</p>
                            </div>
                        </div>
                        <div className="email row">
                            <div className='col-2 '>
                                <i><MdEmail /> </i>
                            </div>
                            <div className='col-10'>
                                <h4>Email :</h4>
                                <p>sahilsoni882001@gmail.com</p>
                            </div>
                        </div>
                        <div className='call row'>
                            <div className='col-2'>
                                <i><BsTelephoneFill /> </i>
                            </div>
                            <div className='col-10'>
                                <h4>Call :</h4>
                                <p>+91 9589415970</p>
                            </div>
                        </div>
                        <div className='map'>
                            <Mymap />
                        </div>
                        </div>
                    </div>
                    <div className='col-lg-12 col-xl-7 d-flex-center resPadd-0'>
                        <div className='form'>
                            {show&&(<div class="alert alert-success" role="alert">
                                <span>your message sent successfully</span>
                                <MdCancel onClick={()=>{setShow(false)}} style={{fontSize:22,cursor:'pointer'}}/>
                            </div>)}
                            
                            <form onSubmit={(e) => { handleFormSubmit(e) }}>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="name">Your Name</label>
                                        <input type="text" value={name} name="name" class="form-control" id="name" required
                                            onChange={(e) => { setName(e.target.value) }}
                                        />
                                        <div class="validate"></div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="name">Your Email</label>
                                        <input type="email" value={email} class="form-control" name="email" id="email" required
                                            onChange={(e) => { setEmail(e.target.value) }}
                                        />
                                        <div class="validate"></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="name">Subject</label>
                                    <input type="text" value={subject} class="form-control" name="subject" id="subject" required
                                        onChange={(e) => { setSubject(e.target.value) }}
                                    />
                                    <div class="validate"></div>
                                </div>
                                <div class="form-group">
                                    <label for="name">Message</label>
                                    <textarea class="form-control" value={message} name="message" rows="10" required
                                        onChange={(e) => { setMessage(e.target.value) }}
                                    ></textarea>
                                    <div class="validate"></div>
                                </div>
                                <div className="text-center">
                                    <button type='submit'  >Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
