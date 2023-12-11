import './index.css'

const DenominationItem = props => {
  const {denominationValues, updateBalance} = props
  const {id, value} = denominationValues
  const onUpdateBalance = () => {
    updateBalance(value)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onUpdateBalance}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
