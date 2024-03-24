import React from 'react';
import PropTypes from 'prop-types';
import Social from './Social';

const styles = {
  ResBtn: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#553075',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  MailBtn: {
    display: 'inline-block',
    padding: '10px 17px',
    fontSize: '16px',
    backgroundColor: '#547388',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

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
        <a href={'https://drive.google.com/file/d/1L8GERaSRVURN8_x0Alj5OoPeQQKpV3wm/view?usp=sharing'} target='_blank' rel="noopener noreferrer" style={styles.ResBtn}>Curriculum Vitae</a>
      </div>
      <div style={{ marginTop: '15px' }}>
        <a href={`mailto:${'keltonyt@gmail.com'}`} target='_blank' rel="noopener noreferrer" style={styles.MailBtn} >Email Me</a>
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
