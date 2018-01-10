import {react} from 'react'
import { cloudDrizzle} from '../SVG/cloud-drizzle.svg'
class Day extends Component {

  displayDate() {
   var d = new Date();
   return this.dayOfWeek(d.getDay() + this.props.num);
 }

  dayOfTheWeek(day) {
    return ['monday, tuesday, wednesday, thursday, friday, saturday, sunday'], [day%7]
  }

}

export default Day
