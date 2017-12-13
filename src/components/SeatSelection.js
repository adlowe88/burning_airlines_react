import React, {PureComponent as Component} from 'react'
import axios from 'axios'

class SeatSelection extends Component {
  constructor () {
    super();
    this.state = {
      seats: [],
    }
  }

  

  render() {
    return(
      <div>
        <SeatList />
      </div>
    );
  }
}

class SeatList extends Component {
  render() {
    return (
      <div>
        <h1>Seats on Flight:</h1>
      </div>
    );
  }
}

export default SeatSelection;

// class Seat extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       taken: false,
//       seat_id: 0,
//       user_id: 4
//     }
//
//  }
//
//  componentDidMount(){
//     this.setState({
//       taken: this.props.seatInfo.user_id !== null,
//       seat_id: this.props.seatInfo.id
//      })
//   }
//
//  render(){
//
//    return(
//       <div className="seat" onClick={() => {this.props.clicky(this.state)} }>
//         { (!this.state.taken ) ?  this.props.seatInfo.name  : "X" }
//       </div>
//     )
//   }
// }
//
//
// class SeatSelection extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       seats: []
//     }
//
//    axios.get("http://localhost:5000/flights/13.json").then( res => {  this.setState({seats: res.data.seats}) } )
//     this.handles = this.handles.bind(this)
//   }
//
//  handles(s) {
//     // console.log(s)
//     axios.put(`http://localhost:5000/seats/${s.seat_id}.json`, {user_id: s.user_id}).then( res => {
//       // console.log(res)
//     })
//     // axios.post()
//     // console.log(s)
//   }
//
//  render() {
//    console.log(this.state.seats);
//    return(
//       <div>
//         {  this.state.seats.map( (s) => {
//            <Seat seatInfo={s} key={s.id} clicky={ this.handles } />
//         } )  }
//       </div>
//     )
//   }
// }


{/* <Seat seats=/> */}
