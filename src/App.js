import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';
import myphoto from './components/myphoto.jpg';

class App extends Component {
  render() {

    const person = {
      avatar: myphoto,
      name: 'Yen-Ting(Kelton) Lee',
      profession: 'Software/Machine Learning Engineer',
      bio: "❤ Hello! I am Kelton, currently a grad student in United States. I'v been conducting AI research at various academic institutions in Taiwan. I'm passionate about the diverse fields of Machine Learning and the evolution of AI. I love team collaboration to create innovative products, so if you are too, you've got to get in touch with me!",
      address: 'Kaohsiung, Taiwan.',
      email: 'keltonyt@gmail.com',
      CV: 'curriculum vitae',
      social: [
        {name: 'facebook', url: 'https://www.facebook.com/keltonyt'},
        {name: 'envelope', url: 'mailto:keltonyt@gmail.com'},
        {name: 'github', url: 'https://github.com/keltonlee'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/keltonlee/'}
      ],
      experience: [
        {jobTitle: 'Research Assistant', company: 'Academia Sinica', startDate: 'Aug. 2023', endDate: 'Present', jobDescription: 'Full time TinyML and Sustainable AI research supervised by Prof. Pi-Cheng Hsiu. Conduct research and implement carbon-aware AI models on embedded microcontroller units through Neural Architecture Search.'},
        {jobTitle: 'Research Assistant', company: 'Chang Gung University & Chang Gung Memorial Hospital', startDate: 'Apr. 2023', endDate: 'Oct. 2023', jobDescription: 'Conducted extensive Large Language Model experiments for medical disease analysis and explore the applicability of prompting techniques (few-shot, chain-of-thought, ...) to data analysis and knowledge extraction.'},
        {jobTitle: 'Research Assistant', company: 'Chang Gung University & So-Charming Technology', startDate: 'Oct. 2022', endDate: 'Aug. 2023', jobDescription: 'Developed real-time viewer counting system on PC and Raspberry Pi for high-speed advertising vehicles'}
      ],
      education: [
        {degree: 'B.Sc. in Computer Science and Information Engineering', institution: 'Chang Gung University', startDate: 'Sep. 2019', endDate: 'Jun. 2023'},
        // {degree: 'Ingenieria Atomica', institution: 'Harvard', startDate: 'Jan 2014', endDate: 'Decenber 2015', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
      ],
      certificate: [
        {name: 'Natural Language Processing Specialization', institution: 'DeepLearning.AI', date: 'Mar. 2024', description: 'Learned cutting-edge NLP techniques including Sequence models, Attention models, and more!' },
      ],
      skills: [
        {name: 'HTML/CSS/JavaScript', percentage: '70%'},
        {name: 'SQL', percentage: '85%'},
        {name: 'Python', percentage: '90%'},
        {name: 'PHP', percentage: '75%'},
        {name: 'C/C++', percentage: '90%'}
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
              email={person.email}
              CV={person.CV}
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
