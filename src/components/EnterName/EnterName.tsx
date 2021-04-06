import React from "react"
import './style.scss'

type Props = {
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const EnterName = ({ onClick, onChange, value }: Props): JSX.Element => {
  return (
    <div>
      <input className="c-checkbox" type="checkbox" id="checkbox"/>
      <div className="c-formContainer">
        <form className="c-form" action="">
          <input className="c-form__input" placeholder="Имя" type="text" onChange={onChange} value={value} required/>
          <label className="c-form__buttonLabel" htmlFor="checkbox" onClick={onClick}>
            <button className="c-form__button" type="button">Сохранить</button>
          </label>
          <label className="c-form__toggle" htmlFor="checkbox" data-title="Ввести имя"></label>
        </form>
      </div>
    </div>
  )
}

export default EnterName