import React, {useState} from 'react'
import { JournalTitle } from './JournalTitle';
import './styles/MultilineTextFields.scss';
import MultilineTextFields from './MultilineTextFields';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { LogoProfile } from './LogoProfile';
import './styles/MainPage.scss'

export function JournalHappy() {
  const [answerOne, setAnswerOne] = useState('');
  const [answerTwo, setAnswerTwo] = useState('');
  const [answerThree, setAnswerThree] = useState('');
  
  const settingAnswerOne = (value) => {
    setAnswerOne(value)
  }

  const settingAnswerTwo = (value) => {
    setAnswerTwo(value)
  }

  const settingAnswerThree = (value) => {
    setAnswerThree(value)
  }
  
  const onSubmit = async(event) => {
    try {
      const body = { answerOne, answerTwo, answerThree };
     await fetch("/journal2", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(body)
    })
      window.location = "/createtask";

    } catch(err) {
      console.error(err.message)
    }
  }


  return (
    <>
     <div className="background-image2">
      <LogoProfile/>
      <JournalTitle />
      <form>
        <MultilineTextFields setAnswers={settingAnswerOne}  question="Something that inspired you recently?"/>
        <MultilineTextFields setAnswers={settingAnswerTwo}  question="Something you accomplished today?"/>
        <MultilineTextFields setAnswers={settingAnswerThree}  question="Three things you are grateful for?"/>
      </form>
      <ArrowForwardIosIcon onClick={onSubmit} fontSize="large" className="arrow-submit"/>
      <Link to="/dashboard" className="skip-link">
        <span className="skip-btn">Skip</span>
      </Link>
      </div>
    </>
  )
}


// onChange={e => setAnswerOne(e.target.value)}