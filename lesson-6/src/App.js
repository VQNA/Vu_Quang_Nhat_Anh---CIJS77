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
      AdditionalId:"",
      inputValueName: "",
      inputValueAmount: "",
      inputValueDate: ""

    };
  }
  handleFilterYear = (e) => {
    this.setState({ year: e.target.value })
  }

  onChangeInput = (nameInput, value) => {
    let new_id = this.state.bill.length()
    this.setState({
      ...this.state,
      AdditionalId: new_id,
      [nameInput]:value
    });

  }

  handleSubmit = (e) =>{
      this.setState({
        ...this.state,
        bill: [...this.state.bill,
          {
          id: this.state.AdditionalId,
          date: this.state.inputValueDate,
          description: this.state.inputValueName,
          amount: this.state.inputValueAmount
        }
        ]
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

        {Open ? (
          <div className='container'>
            <form onSubmit={this.handleSubmit}>
            <div>
              <label>Name</label>
              <input
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
                type="text"
                name="date"
                placeholder='dd/mm/yy'
                onChange={(e) => {
                  this.onChangeInput("inputValueDate", e.target.value);
                }}
              />
            </div>
            <button type="submit">Add</button>
            </form>
            <button onClick={() => {
              this.setState({
                Open: !Open

              })
            }}>Cancel</button>

          </div>) : (<div>
            <button onClick={() => {
              this.setState({
                Open: !Open

              })
            }}>Add new expense</button>
          </div>)}


        <div className='display_form'>
          <div>
            <label for="year_select">Filter by year: </label>
            <select name="year_select" value={this.state.year} onChange={this.handleFilterYear}>
              <option value={null}>{null}</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>

            {filterDropdown.map((bills) => {
              return (
                <div key={bills.id}>
                  <div>{bills.date}</div>
                  <div>{bills.description}</div>
                  <div>${bills.amount}</div>

                </div>
              )
            })}
          </div>


        </div>
      </div>
    );
  }
}











