import './style.scss'

type Props = {
  FirstElem: () => JSX.Element,
  SecondElem: () => JSX.Element,
  ThirdElem: () => JSX.Element,
}

const InfoRow = ({ FirstElem, SecondElem, ThirdElem }: Props): JSX.Element => (
  <div className="info-row-container">
      <FirstElem/>
      <SecondElem/>
      <ThirdElem/>
  </div>
)

export default InfoRow