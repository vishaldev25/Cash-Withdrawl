import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {count: 2000}

  updateBalance = value => {
    this.setState(prevState => ({count: prevState.count - value}))
  }

  getFirstCharOfName = name => name.slice(0, 1)

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = this.getFirstCharOfName(name)

    return (
      <div className="bg-container">
        <div className="container">
          <div className="person-details-container">
            <h2 className="circle-design">{initial}</h2>
            <p className="name">{name}</p>
          </div>
          <div className="amount-container">
            <p className="balance-heading">Your Balance</p>
            <p className="rupees">
              {count} <br /> <span>In Rupees</span>
            </p>
          </div>
          <p className="heading">Withdraw</p>
          <p className="choosing">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-container">
            {denominationsList.map(each => (
              <DenominationItem
                denominationValues={each}
                key={each.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
