import { v4 as uuidv4 } from 'uuid';
import PredixImg from '../images/predix.jpg'
import CAPImg from '../images/cap.JPG'
import ImgDetectionImg from '../images/image_detection.jpg'
import EmailBotImg from '../images/email_bot.png'
import MedCareImg from '../images/medcare.JPG'
import JobScraperImg from '../images/job_scraper.JPG'
import PortfolioImg from '../images/portfolio.JPG'
import ResultGenImg from '../images/result_generator.png'
import RFDTImg from '../images/rfdt.png'
import TodoImg from '../images/todo_app.JPG'
import GridlentImg from '../images/gridlent.png'

const projectList = [
  {
    id: uuidv4(),
    name: 'Gridlent',
    desc:
      'A B2B contract hiring platform connecting global businesses with trusted vendors for structured, transparent talent acquisition — handling contracts, invoicing, and compliance end-to-end.',
    img: GridlentImg,
    tech: ['react', 'javascript', 'nodejs'],
    liveLink: 'https://sourcefy-kyzvcscqh-shyam-kulkarnis-projects.vercel.app/home',
    githubLink: 'https://github.com/skshamagarwal/Gridlent'
  },
  {
    id: uuidv4(),
    name: 'PredixDB',
    desc:
      'An online platform that helps users track media they\'ve watched, are currently watching, or plan to watch next — complete with personalized recommendations for each user.',
    img: PredixImg,
    tech: ['django', 'html css', 'javascript', 'ai ml', 'python'],
    liveLink: 'https://predixdb.herokuapp.com/',
    githubLink: 'https://github.com/skshamagarwal/Predix'
  },
  {
    id: uuidv4(),
    name: 'Jobs Scraper',
    desc:
      'A meta search engine that aggregates jobs, vacancies, and internships from multiple sources into a single platform. Built during my time at Frsh Technologies.',
    img: JobScraperImg,
    tech: ['javascript', 'nodejs'],
    liveLink: 'https://frshr.in/jobs~result.html?LatestJobs-Result',
    githubLink: ''
  },
  {
    id: uuidv4(),
    name: 'Web Portfolio',
    desc:
      'This personal portfolio — showcasing my projects, experience, and skills to a wider audience.',
    img: PortfolioImg,
    tech: ['html css', 'javascript', 'react', 'nodejs'],
    liveLink: 'https://skshamagarwal.github.io/portfolio/',
    githubLink: 'https://github.com/skshamagarwal/portfolio'
  },
  {
    id: uuidv4(),
    name: 'ML from Scratch',
    desc:
      'Decision Tree and Random Forest models implemented from scratch in Python, without relying on any ML frameworks.',
    img: RFDTImg,
    tech: ['ai ml', 'python'],
    liveLink: 'https://github.com/skshamagarwal/ML_From_Scratch/blob/master/DecisionTree.ipynb',
    githubLink: 'https://github.com/skshamagarwal/ML_From_Scratch'
  },
  {
    id: uuidv4(),
    name: 'MEDCARE',
    desc:
      'Mobile application for consulting doctors, tracking health checkups, and marking important dates and appointments — an all-in-one companion for your daily healthcare routine.',
    img: MedCareImg,
    tech: ['flutter', 'dart'],
    liveLink: '',
    githubLink: 'https://github.com/skshamagarwal/MedCare'
  },
  {
    id: uuidv4(),
    name: 'HealthCare CAP',
    desc:
      'A Cardiovascular Ailment Prediction app that estimates heart attack risk using machine learning techniques.',
    img: CAPImg,
    tech: ['django', 'html css', 'javascript', 'ai ml', 'python'],
    liveLink: 'https://mycap.herokuapp.com/',
    githubLink: 'https://github.com/skshamagarwal/CAP'
  },
  {
    id: uuidv4(),
    name: 'Image Detection',
    desc:
      'A machine learning model that detects objects in images using VGG transfer learning, trained on a CNN-based architecture.',
    img: ImgDetectionImg,
    tech: ['ai ml', 'python'],
    liveLink: 'https://github.com/skshamagarwal/Reverse-Image-CNN/blob/main/VGG16%20Model%20Training.ipynb',
    githubLink: 'https://github.com/skshamagarwal/Reverse-Image-CNN'
  },
  {
    id: uuidv4(),
    name: 'Email BOT',
    desc:
      'A Python script that automates sending emails via voice command — it either sends the email directly or copies it to the clipboard on your behalf.',
    img: EmailBotImg,
    tech: ['python'],
    liveLink: '',
    githubLink: 'https://github.com/skshamagarwal/EmailBot'
  },
  {
    id: uuidv4(),
    name: 'TODO App',
    desc:
      'A simple, no-frills TODO app to stay on top of daily tasks — add what needs doing, mark items pending or finished, and delete them when you\'re done.',
    img: TodoImg,
    tech: ['react', 'nodejs'],
    liveLink: '',
    githubLink: 'https://github.com/skshamagarwal/Todo-App'
  },
  {
    id: uuidv4(),
    name: 'Result Generator',
    desc:
      'A Python script that automates generating report cards for each student from data stored in a CSV or Excel file.',
    img: ResultGenImg,
    tech: ['python'],
    liveLink: '',
    githubLink: 'https://github.com/skshamagarwal/result-generator'
  },
];

export default projectList;
