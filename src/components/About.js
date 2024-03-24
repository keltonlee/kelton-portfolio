import React from 'react';
import PropTypes from 'prop-types';
import Social from './Social';



const About = ({avatar, name, profession, bio, address, email, CV, social}) => {
  return(
    <div className='bio'>
      <div className='avatar'>
        <img src={avatar} alt={name} />
      </div>
      <div className='title'>
        <h1>{name}</h1>
        <h2>{profession}</h2>
      </div>
      <div className='desc'>
        <p>{bio}</p>
      </div>
      <div className='address'>
        <p>{address}</p>
      </div>
      <div>
        <a href={'https://drive.google.com/file/d/1L8GERaSRVURN8_x0Alj5OoPeQQKpV3wm/view?usp=sharing' } target='_blank' rel="noopener noreferrer" className='ResBtn'>Curriculum Vitae</a>
      </div>
      <div style={{ marginTop: '15px' }}>
        <a href={`mailto:${'keltonyt@gmail.com'}`} target='_blank' rel="noopener noreferrer" className='MailBtn' >Email Me</a>
      </div>
      {/* <div className='email'>
        <p>{email}</p>
      </div>
      <div className='CV'>
        <a target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1L8GERaSRVURN8_x0Alj5OoPeQQKpV3wm/view?usp=sharing'>
          <p>{CV}</p>
        </a>
      </div> */}
      <Social social={social} />
    </div>
  );
};

About.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string,
  CV: PropTypes.string,
  social: PropTypes.node
};

export default About;
