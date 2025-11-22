import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Projects from './components/Selective_Projects';
import Skills from './components/Skills';
import myphoto from './components/myphoto.jpg';

class App extends Component {
  render() {

    const person = {
      avatar: myphoto,
      name: 'Yen-Ting(Kelton) Lee',
      profession: 'Machine Learning Engineer',
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
        {jobTitle: 'Machine Learning Engineer Intern', company: 'Nexa AI', startDate: 'Sep. 2025', endDate: 'Present', 
          jobDescription: [`Optimized multimodal models for on-device use to reduce latency and memory for real-time inference`, 
            `Developed an autonomous Web Agent leveraging Nexa SDK and VLMs, enabling real-time reasoning, multi-tool interaction, and web search integration for dynamic task execution`
          ]},

        {jobTitle: 'Full Stack LLM Development Intern', company: 'Accenture (in collaboration with T-Mobile)', startDate: 'Jun. 2025', endDate: 'Sep. 2025', 
          jobDescription: [`Developed a collaborative multi-agent system using AutoGen to tackle real-world business cases, integrating planning, retrieval, and evaluation agents to optimize workflow execution and decision-making`, 
            `Designed and implemented an autonomous evaluation pipeline using AutoGen, featuring an LLM-based planner to intelligently orchestrate scenario evaluations, dynamically prioritizing tasks, and avoiding redundant assessments`, 
            `Achieved 88% evaluation accuracy by optimizing LLM prompts with DSPy and tracking performance improvements using MLflow, enhancing evaluation efficiency and reproducibility.`,
            'AEMA: Verifiable Evaluation Framework for Trustworthy and Controlled Agentic LLM Systems. Accepted to the AAAI 2026 TrustAgent Workshop.',
            'POLARIS: Typed Planning and Governed Execution for Agentic AI in Back-Office Automation. Accepted to AABA4ET @ AAAI 2026.'
          ]},

        {jobTitle: 'Machine Learning Research Assistant', company: 'Academia Sinica', startDate: 'Aug. 2023', endDate: 'Jun. 2025', 
          jobDescription: [`Participated in the design, optimization, and implementation of a sustainable Neural Architecture Search (NAS) framework for developing carbon-efficient Transformers and CNN models, optimized for STM32 microcontrollers`, 
            `Achieved a 35% reduction in carbon footprint on CNN models by designing the NAS search algorithm and optimizing model flash, CPU, and energy usage using Python and Pytorch`, 
            `Designed and optimized energy and latency cost models for diverse microcontroller architectures`,
            `Conducted research on compression techniques for Transformer architecture on microcontrollers, including quantization, pruning, and knowledge distillation`
          ]},
        
        {jobTitle: 'Research Assistant', company: 'Chang Gung University & Chang Gung Memorial Hospital', startDate: 'Apr. 2023', endDate: 'Oct. 2023', 
          jobDescription: [`Utilize Large Language Models (GPT, BERT) for the diagnosis of autism spectrum disorder, exploring prompt engineering methods for data analysis and disease prediction`, 
            `Attained 91% accuracy in disease prediction for over 8000 patients by researching prompting engineering techniques including zero-shot, few-shot, chain-of-thought, and expert prompting on LLMs`
          ]},
        
        {jobTitle: 'Research Assistant', company: 'Chang Gung University & So-Charming Technology', startDate: 'Oct. 2022', endDate: 'Aug. 2023', 
          jobDescription: [`Develop real-time viewer counting system on both Linux and Raspberry Pi platforms for 25MPH or higher advertising vehicles`, 
          `Realized 80% accuracy in detecting high-speed imagery using Python, OpenCV, PyTorch, and YOLOv7 by
          developing a facial recognition and tracking system featuring real-time data processing and API integration`, 
          `Utilized CUDA to accelerate the model to achieve 28 FPS`]},

         {jobTitle: 'Teaching Assistant', company: 'Chang Gung University ', startDate: 'Sep. 2022', endDate: 'Jul. 2023', 
          jobDescription: [`Designed and reviewed programming assignments for a 70-student Introduction to Computer Science course`, 
          `Tutored students in C/C++ programming skills and relevant knowledge including Object-Oriented Programming`]}
      ],
      education: [
        {degree: 'M.Sc. in Computer Science and Engineering', institution: 'University of California - San Diego', startDate: 'Sep. 2024', endDate: 'Jun. 2026'},
        {degree: 'B.Sc. in Computer Science and Information Engineering', institution: 'Chang Gung University', startDate: 'Sep. 2019', endDate: 'Jun. 2023'},
      ],
      projects: [
      {
        title: "Speculative Tool Calling for Efficient AI Agents (WukLab UCSD)",
        techStack: "Python, LangChain, LangGraph",
        startDate: "Sep. 2025",
        endDate: "Present",
        projectDescription: [
          "Built a speculation pipeline where a lightweight draft model predicts and pre-executes the next agent tool call, and the target model reuses matching results to reduce end-to-end latency using LangGraph",
          "Designed fast verification heuristics to match diverse draft vs target tool calls without executing expensive tools"
        ]
      },
      {
        title: "Text-Guided Image Editing with Diffusion Models",
        techStack: "Python, LangChain, Kubernetes",
        startDate: "Feb. 2025",
        endDate: "Jun. 2025",
        projectDescription: [
          "Developed a language-guided image editing pipeline enabling end-to-end mask prediction and inpainting for diverse object replacement tasks",
          "Achieved a 70% reduction in FID by integrating LLaVA for spatial description, Grounded-SAM for precise segmentation, and combining Stable Diffusion with ControlNet for mask generation",
          "Built and scaled a dataset generation workflow and fine-tuned ControlNet on custom dataset as mask generator"
        ]
      },
      {
        title: "Eedi - Mining Misconceptions in Mathematics",
        techStack: "Python, OpenAI, vLLM, LangChain",
        startDate: "Sep. 2024",
        endDate: "Dec. 2024",
        projectDescription: [
          "Improved Mean Average Precision (MAP) by 20 points by developing a classification pipeline that integrates Qwen2.5, SFR-Embedding-2, and DeBERTa to identify misconceptions based on incorrect math answers",
          "Fine-tuned SFR and BGE embedding models by synthesizing data to enable hard negative contrastive learning",
          "Accelerated inference and compressed model using vLLM by KV caching, continuous batching, and quantization"
        ]
      },
      {
        title: "LLM RAG Text Classification",
        techStack: "Python, Llama3, LangChain, faiss",
        startDate: "Aug. 2024",
        endDate: "Sep. 2024",
        projectDescription: [
          "Achieved 80% accuracy by developing a Llama 3-based text classification system and implementing a Retrieval-Augmented Generation (RAG) model to categorize customer support tickets",
          "Optimized document retrieval and response generation by embedding both data and user requests with Sentence Transformers for vector search, improving model efficiency and enhancing answer relevance"
        ]
      },
      {
        title: "Concentracer",
        techStack: "Python, Java, PHP, MySQL, Caffe, OpenCV, CUDA, Linux, GPU",
        startDate: "Jun. 2021",
        endDate: "Jan. 2024",
        projectDescription: [
          "Presented and received Best Paper Award in IEEE Eurasia Conference on IoT, Communication and Engineering by leading a 4-person team in developing an Android learning app for dyslexia patients",
          "Improved dyslexia patients' reading comprehension and concentration by 34\% using a gaze-tracking Caffe model and phrase segmentation system",
          "Developed a data-driven NLP pipeline for text significance extraction and syntactic parsing using Python, NLTK, and CKIP, and designed a MySQL database"
        ]
      },
      {
        title: "Encode & Decode Bot",
        techStack: "Python, HTML, CSS, Javascript, React.js, Docker, SQLite",
        startDate: "Jan. 2023",
        endDate: "Jul. 2023",
        projectDescription: [
          "Designed a public PDF encoding and decoding cloud service for both web and Discord bot platforms, with functions including encrypting, decrypting, and merging files",
          "Boosted decoding speed by 35\% by scheduling the use of 5 decoders with Docker and threading to accelerate decoding processes",
          "Monitored and visualized Docker resource usage and enabled the suspension of ongoing processes through front end"
        ]
      },
      {
        title: "Diabetes Prediction Analysis",
        techStack: "Python, Pytorch, Scikit-learn, Pandas, Numpy, Matplotlib",
        startDate: "Sep. 2022",
        endDate: "Jan. 2023",
        projectDescription: [
          "Achieved 86% accuracy in predicting diabetes by conducting comprehensive analysis using two Kaggle datasets",
          "Analyzed feature relationships and importance across two distinct datasets using Python, and compared various ML and DL predictions, as well as hyperparameter tuning approaches using PyTorch and Scikit-learn",
        ]
      },
      {
        title: "Emotional Music",
        techStack: "Python, Tensorflow, NLTK",
        startDate: "Jun. 2022",
        endDate: "Oct. 2022",
        projectDescription: [
          "Designed an automated music playback software that plays different styles of music based on the user's emotions",
          "Built a facial emotion recognition model using TensorFlow and implemented web scraping for free music and music switching functionality using Python",
        ]
      },
      {
        title: "Keepfitness",
        techStack: "Python, Java, PHP, SQL, AWS",
        startDate: "Feb. 2021",
        endDate: "Jul. 2021",
        projectDescription: [
          "Led a team in creating a fitness and diet menu recommendation app, customized to individual physical conditions",
          "Leveraged over 10,000 records of official government data on food and fitness to establish a backend database with MySQL and developed APIs for data transmission and reception within the Android app using Java",
        ]
      },
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
                <Projects projects={person.projects} />
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
