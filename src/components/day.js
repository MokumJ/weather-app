import {react} from 'react'
import { night } from '../SVG/moon-stars.svg'
import { rain } from '../SVG/rain.svg'
import { snow } from '../SVG/snow.svg'
import { storm } from '../SVG/tornado.svg'
import { wind } from '../SVG/wind.svg'
import { fog } from '../SVG/fog.svg'
import { cloud } from '../SVG/cloud.svg'
import { cloudyDay } from '../SVG/clouds-sun.svg'
import { cloudyNight } from '../SVG/cloud-moon.svg'

import
class Day extends Component {

  displayDate() {
   var d = new Date();
   return this.dayOfWeek(d.getDay() + this.props.num);
 }

  dayOfTheWeek(day) {
    return ['monday, tuesday, wednesday, thursday, friday, saturday, sunday'], [day%7]
  }

  getIcon() {
    var condition = '' + this.props.icon;
    switch (condition) {
      case 'clear-night':
        return <img src={night} alt={condition} />;
      case 'rain':
      case 'sleet':
        return <img src={rain} alt={condition} />;
      case 'snow':
        return <img src={snow} alt={condition} />;
      case 'thunderstorm':
        return <img src={storm} alt={condition} />;
      case 'wind':
        return <img src={wind} alt={condition} />;
      case 'fog':
        return <img src={fog} alt={condition} />;
      case 'cloudy':
        return <img src={cloudy} alt={condition} />;
      case 'partly-cloudy-day':
        return <img src={cloudyDay} alt={condition} />;
      case 'partly-cloudy-night':
        return <img src={cloudyNight} alt={condition} />;
      case 'clear-day':
      default:
        return <img src={sun} alt={condition} />;
    }
  }

  render() {
   return <div className="day">
     { this.getIcon() }
     <p>{ this.displayDate() }</p>
     <p><span className="max">{ Math.round(this.props.max) }˚</span> / { Math.round(this.props.min) }˚</p>
   </div>;
 }
}

export default Day;


}

export default Day
