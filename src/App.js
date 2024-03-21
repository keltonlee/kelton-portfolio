import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';

class App extends Component {
  render() {

    const person = {
      avatar: 'https://gndx.co/wp-content/uploads/2017/05/oscar_barajas.jpg',
      name: 'Yen-Ting(Kelton) Lee',
      profession: 'Software Engineer',
      bio: '❤ Front end Developer - Growth Hacker at @CityDrive, CSS Lover, Geek & Blogger. Better known as The Grumpy Developer.',
      address: 'Kaohsiung, Taiwan.',
      social: [
        {name: 'facebook', url: 'https://facebook.com/oscarbarajastavares'},
        {name: 'email', url: 'mailto:keltonyt@gmail.com'},
        {name: 'github', url: 'https://github.com/keltonlee'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/keltonlee/'}
      ],
      experience: [
        {jobTitle: 'Research Assistant', company: 'Academia Sinica', startDate: 'Aug 2023', endDate: 'Present', jobDescription: 'Full time TinyML and Sustainable AI research supervised by Prof. Pi-Cheng Hsiu. Conduct research and implement carbon-aware AI models on embedded microcontroller units through Neural Architecture Search.'},
        {jobTitle: 'Research Assistant', company: 'Chang Gung University & Chang Gung Memorial Hospital', startDate: 'April 2023', endDate: 'Oct 2023', jobDescription: 'Conducted extensive Large Language Model experiments for medical disease analysis and explore the applicability of prompting techniques (few-shot, chain-of-thought, ...) to data analysis and knowledge extraction.'},
        {jobTitle: 'Research Assistant', company: 'Chang Gung University & So-Charming Technology', startDate: 'Oct 2022', endDate: 'Aug 2023', jobDescription: 'Developed real-time viewer counting system on PC and Raspberry Pi for high-speed advertising vehicles'}
      ],
      education: [
        {degree: 'B.Sc. in Computer Science and Information Engineering', institution: 'Chang Gung University', startDate: 'Sep 2019', endDate: 'Jun 2023', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
        {degree: 'Ingenieria Atomica', institution: 'Harvard', startDate: 'Jan 2014', endDate: 'Decenber 2015', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
      ],
      certificate: [
        {name: 'FrontEnd Developer', institution: 'Platzi', date: 'Jan 2015', description: 'Aenean commodo ligula eget dolor. Aenean massa.' },
        {name: 'Backend Developer', institution: 'Platzi', date: 'Jan 2016', description: 'Aenean commodo ligula eget dolor. Aenean massa.' }
      ],
      skills: [
        {name: 'HTML5', percentage: '95%'},
        {name: 'CSS', percentage: '90%'},
        {name: 'JavaScript', percentage: '75%'},
        {name: 'PHP', percentage: '50%'}
      ]
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                <Certificate certificate={person.certificate} />
                <Skills skills={person.skills} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
