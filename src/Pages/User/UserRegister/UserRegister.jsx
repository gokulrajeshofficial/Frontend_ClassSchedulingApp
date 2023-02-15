import { useEffect, useState } from 'react'
import './UserRegister.css'
import axios from 'axios';


function UserRegister() {

const [full_name,set_full_name] = useState('')
const [email,setemail] = useState('')
const [contact, setcontact] = useState('')
const [password, setpassword] = useState('')
const [image_status, set_image_status] = useState(false)
const [image, setimage] = useState('https://static.wixstatic.com/media/cdeaee_783cac30dceb461ba51ab92ef2441855~mv2.png/v1/fill/w_640,h_516,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cdeaee_783cac30dceb461ba51ab92ef2441855~mv2.png')

console.log(image)

useEffect(()=>{

  if (image_status){
    setimage('https://www.pngplay.com/wp-content/uploads/6/Cow-Cartoon-PNG.png')
  }
  else{
    setimage('https://www.seekpng.com/png/full/880-8809319_perfect-email-invitation-survey-cartoon.png')
  }
},[image_status])

const submit_form = ()=>{
  axios.post(`http://localhost:5000/signup/signup`, {
    name: {full_name},
    email: {email},
    contact:{contact},
    password:{password},
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

const cursor = document.getElementById('cursor')
 document.addEventListener('mousemove',(event)=>{
  cursor.style.left = event.clientX + 'px'
  cursor.style.top = event.clientY + 'px'
 })
  return(

    <div className="containers">
      {/* <img src='https://sc04.alicdn.com/kf/H7eb70ed145234ecdac682ed217f59f34U/236513508/H7eb70ed145234ecdac682ed217f59f34U.png' width='50px' style={{'position':'absolute'}} id='cursor' alt='img'/> */}
 
      <section className='signup_logo'>
        <img src={image} height='300px' style={{'margin-left':'100px'}}/>

          </section>
          <section className='signup_inputs'>
            
          <div style={{'width':'500px'}}>
          <div className='title'>SIGN UP

          </div><p style={{'color':'white'}}>Join us for free and get the best things that we provide. we are the best amoung ourself.</p>
          <div className='inputs'>
          <label>FULL NAME</label>
          <input type='text' className='text' onChange={(e)=>{set_full_name(e.target.value);set_image_status(!image_status)}} value={full_name}/>
          </div>
          <div className='inputs'>
          <label>EMAIL ID</label>
          <input type='text'className='text' onChange={(e)=>{setemail(e.target.value); set_image_status(!image_status)}} value={email}/>
          </div>
          <div className='inputs'>
          <label>CONTACT NUMBER</label>
          <input type='text'className='text' onChange={(e)=>{setcontact(e.target.value);set_image_status(!image_status)}} value={contact}/>
          </div>
          <div className='inputs'>
          <label>PASSWORD</label>
          <input type='text' className='text' onChange={(e)=>{setpassword(e.target.value);set_image_status(!image_status)}} value={password}/>
          </div>
          <div className='inputs'>
          <input type='checkbox'/>
          <p style={{'padding':'10px'}}> I agree to your terms and conditions, for more information check <a href='#'>terms and conditions</a></p>
          </div>
          <button className='submit' onClick={()=>submit_form()}>
          Sign up
          </button>
          </div>   
      </section>
    </div>

  )

}

export default UserRegister