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
      bio: "❤ Hello! I am Kelton, currently a Master's student at UCSD. I'v been conducting AI research at various academic institutions in Taiwan. I'm passionate about the diverse fields of Machine Learning and the evolution of AI. I love team collaboration to create innovative products, so if you are too, you've got to get in touch with me!",
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
        {jobTitle: 'Machine Learning Research Assistant', company: 'Academia Sinica', startDate: 'Aug. 2023', endDate: 'Present', 
          jobDescription: [`Participated in the design, optimization, and implementation of a sustainable Neural Architecture Search (NAS) framework for developing carbon-efficient Transformers and 
            CNN models, optimized for STM32 microcontrollers`, 
            `Achieved a 35% reduction in carbon footprint on CNN models by designing the NAS search algorithm and optimizing model flash, CPU, and energy usage using Python and Pytorch`, 
            `Conducted research on compression techniques for Transformer architecture on microcontrollers, including quantization, pruning, and knowledge distillation`
          ]},
        
        {jobTitle: 'Research Assistant', company: 'Chang Gung University & Chang Gung Memorial Hospital', startDate: 'Apr. 2023', endDate: 'Oct. 2023', 
          jobDescription: [`Utilize Large Language Models (GPT, BERT) for the diagnosis of autism spectrum disorder, exploring prompt engineering methods for data analysis and disease prediction`, 
            `Attained 88% accuracy in disease prediction for over 7700 patients by researching prompting engineering techniques including zero-shot, few-shot, chain-of-thought, and expert prompting on LLMs`
          ]},
        
        {jobTitle: 'Research Assistant', company: 'Chang Gung University & So-Charming Technology', startDate: 'Oct. 2022', endDate: 'Aug. 2023', 
          jobDescription: [`Develop real-time viewer counting system on both Linux and Raspberry Pi platforms for 25MPH or higher advertising vehicles`, 
          `Realized 80% accuracy in detecting high-speed imagery using Python, OpenCV, PyTorch, and YOLOv7 by
          developing a facial recognition and tracking system featuring real-time data processing and API integration`, 
          `Utilized CUDA to accelerate the model to achieve 28 FPS`]}
      ],
      education: [
        {degree: 'M.Sc. in Computer Science and Engineering', institution: 'University of California - San Diego', startDate: 'Sep. 2024', endDate: 'Jun. 2026'},
        {degree: 'B.Sc. in Computer Science and Information Engineering', institution: 'Chang Gung University', startDate: 'Sep. 2019', endDate: 'Jun. 2023'},
      ],
      certificate: [
        {name: 'Natural Language Processing Specialization', institution: 'DeepLearning.AI', date: 'Mar. 2024', description: 'Learned cutting-edge NLP techniques including Sequence models, Attention models, and more!' },
        {name: 'NoSQL, Big Data, and Spark Foundations Specialization', institution: 'IBM', date: 'Apr. 2024', description: 'Learned big data abd machine learning with Hadoop, SQL, MongoDB, and Spark!' }
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
