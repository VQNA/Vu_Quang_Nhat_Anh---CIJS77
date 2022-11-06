import './App.css';
import React from 'react';
function App() {
  return (
    <div className="App">
      <ExpenseApp />
    </div>
  );
}

export default App

class ExpenseApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Open: true,
      bill: [
        {
          id: 1,
          date: "16/01/2022",
          description: "Some Book",
          amount: "50"
        },
        {
          id: 2,
          date: "10/10/2022",
          description: "Electricity Bill",
          amount: "75"
        },
        {
          id: 3,
          date: "08/05/2022",
          description: "New Bike",
          amount: "100"
        }],
      year: "",
      AdditionalId: "",
      inputValueName: "",
      inputValueAmount: "",
      inputValueDate: ""

    };
  }
  handleFilterYear = (e) => {
    this.setState({ year: e.target.value })
  }

  onChangeInput = (nameInput, value) => {
    this.setState({
      ...this.state,
      [nameInput]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      ...this.state,
      bill: [...this.state.bill,
      {
        date: this.state.inputValueDate,
        description: this.state.inputValueName,
        amount: this.state.inputValueAmount
      }
      ],
      inputValueName: "",
      inputValueAmount: "",
      inputValueDate: ""
    })
  }

  render() {
    let { Open } = this.state;



    const year = this.state.year
    const bill = this.state.bill
    const filterDropdown = bill.filter(function (result) {
      return result.date.split("/")[2] === year
    });

    return (
      <div className="Form">
        <div className="Form_Add">
          {Open ? (
            <div className='container'>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <label>Name</label>
                  <input
                    className='input_field'
                    type="text"
                    name="description"
                    placeholder='Enter name here...'
                    onChange={(e) => {
                      this.onChangeInput("inputValueName", e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label>Amount</label>
                  <input
                    className='input_field'

                    type="text"
                    name="amount"
                    placeholder='Enter amount here...'
                    onChange={(e) => {
                      this.onChangeInput("inputValueAmount", e.target.value);
                    }}

                  />
                </div>
                <div>
                  <label>Date</label>
                  <input
                    className='input_field'

                    type="text"
                    name="date"
                    placeholder='dd/mm/yy'
                    onChange={(e) => {
                      this.onChangeInput("inputValueDate", e.target.value);
                    }}
                  />
                </div>
                <button className='add_expense' type="submit">Add</button>
              </form>
              <button className='cancel' onClick={() => {
                this.setState({
                  Open: !Open

                })
              }}>Cancel</button>

            </div>) : (<div>
              <button className='open' onClick={() => {
                this.setState({
                  Open: !Open

                })
              }}>Add new expense</button>
            </div>)}
        </div>

        <div className='display_form'>
          <div className='Filter'>
            <label for="year_select" className='Title_filter'>Filter by year: </label>
            <select name="year_select" className='Selector' value={this.state.year} onChange={this.handleFilterYear}>
              <option value={null}>{null}</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
          {filterDropdown.map((bills) => {
            return (
              <div key={bills.id} className="ExpenseItem">
                <div className="Date">{bills.date}</div>
                <div className="Desc">{bills.description}</div>
                <div className="Amount">${bills.amount}</div>

              </div>
            )
          })}


        </div>
      </div>
    );
  }
}











