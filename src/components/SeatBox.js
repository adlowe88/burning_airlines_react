import React, {PureComponent as Component} from 'react'
import axios from 'axios'
class Seat extends Component {
  constructor(props){
    super(props)
    this.state = {
      taken: false,
      seat_id: 0,
      user_id: 4,
      flight_id: 0,
      reservation_id: 0
    }
  }
  componentDidMount(){
    this.setState({
      taken: this.props.seatInfo.taken,
      seat_id: this.props.seatInfo.id,
      user_id: this.props.seatInfo.user_id,
      flight_id: this.props.seatInfo.flight_id,
      reservation_id: this.props.seatInfo.reservation_id
     })
  }
  render(){
    return(
      <div className="seat" onClick={() => {this.props.clicky(this.state)} }>
        { (!this.props.seatInfo.taken) ?  this.props.seatInfo.name  : "X" }
      </div>
    )
  }
}
class SeatBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      seats: [],
      airplane: {},
      seats_left: 0,
      flight_id: 0
    }
    axios.get(`https://burningairlinesapp.herokuapp.com/flights/${this.props.flightId}.json`).then( res => {  this.setState({seats: res.data.seats, airplane: res.data.airplane, seats_left: res.data.seats_left, flight_id: res.data.id}); console.log(res.data) } )
    this.handles = this.handles.bind(this)
  }


  // console.log(this.state.flightId);

  handles(s) {
    // console.log(s)
    if(!s.user_id){
      axios.put(`https://burningairlinesapp.herokuapp.com/${s.seat_id}.json`, {user_id: 4, taken: true}).then( res => {
        console.log(res)
      })
      axios.post("https://burningairlinesapp.herokuapp.com/reservations.json", {user_id: 4, flight_id: s.flight_id, seat_id: s.seat_id}).then(
        res => { console.log(res) }
      )
      axios.put(`https://burningairlinesapp.herokuapp.com/flights/${this.state.flight_id}`, {seats_left: (this.state.seats_left - 1)}).then( res => { })

    }else{
      axios.put(`https://burningairlinesapp.herokuapp.com/seats/${s.seat_id}.json`, {user_id: null, taken: false}).then( res => {
        console.log(res)
      })
      console.log(s.reservation_id)
      axios.delete(`https://burningairlinesapp.herokuapp.com/reservations/${s.reservation_id}.json`).then( res => {
        console.log("del") }
      )
      axios.put(`https://burningairlinesapp.herokuapp.com/flights/${this.state.flight_id}`, {seats_left: (this.state.seats_left + 1)}).then( res => { })
    }
    axios.get(`https://burningairlinesapp.herokuapp.com/flights/${s.flight_id}.json`).then( res => {  this.setState({seats: res.data.seats}) } )
    setTimeout(window.location.reload(), 400)
  }

  render() {
    const cols = this.state.airplane.columns
    return(
      <div className="seatbox" style={{width: `${cols * 84}px`}}>
        {  this.state.seats.map( (s) => {
          return <Seat seatInfo={s} key={s.id} clicky={ this.handles } />
        } )  }
      </div>
    )
  }
}
export default SeatBox;
{/* <Seat seats=/> */}
