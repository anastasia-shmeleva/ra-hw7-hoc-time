import DateTimePretty from "./DateTimePretty";

const Video = (props) => {
  return (
      <div className="video">
          <iframe title={'myFrame'} src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <DateTimePretty date={props.date} />
      </div>
  )
}

export default Video;