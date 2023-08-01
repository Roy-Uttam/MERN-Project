const WorkoutDetails = ({ workout }) => {

    return (
      <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load: </strong>{workout.load}</p>
        <p><strong>Number of qty: </strong>{workout.qty}</p>
        <p>{workout.createdAt}</p>
      </div>
    )
  }
  
  export default WorkoutDetails