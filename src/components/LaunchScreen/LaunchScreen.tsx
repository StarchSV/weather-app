import React, { useEffect, useState } from "react"
import EnterName from "../EnterName/EnterName"
import './style.scss'

type Props = {
  setVisibility: (visibiliy: boolean) => void
}


const LaunchScreen = ({ setVisibility }: Props) => {
  const userName = localStorage.getItem('userName')
  const [userNameChanged, setUserNameChanged] = useState(false) 
  const [inputFieldValue, setInputFieldValue] = useState('')
  const onUserNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputFieldValue(event.target.value)
  }
  const onConfirmUserNameButtonClicked = (): void => {
    localStorage.setItem('userName', inputFieldValue)
    setUserNameChanged(!userNameChanged)
  }
  useEffect(() => {
    setTimeout(() => {
      if (userNameChanged || userName) {
        setVisibility(false)
      }
    }, 2000)
  }, [setVisibility, userNameChanged, userName])
  return (
    <div className="launch-screen">
      <h1>Привет,<br/>{userName ? userName : 'как к тебе обращаться?'}</h1>
      {!userName && <EnterName onClick={onConfirmUserNameButtonClicked} onChange={onUserNameChange} value={inputFieldValue} />}
    </div>
  )
}

export default LaunchScreen