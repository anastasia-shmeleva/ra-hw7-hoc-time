import moment from "moment";
import DateTime from "./DateTime";

const DateTimePretty = (func) => {
  const prettyTime = (...args) => {
    const a = moment();
    const b = moment(args[0].date);
    const difference = b.from(a);
    return func({date: difference});
  } 
  return prettyTime;
}

export default DateTimePretty(DateTime);