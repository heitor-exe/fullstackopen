const Course = (props) => {
    const { course } = props

    return (
        <div>
            <h1>{course.name}</h1>
            {course.parts.map((parts) => <p>{parts.name} {parts.exercises}</p>)}

            <p><b>total of exercises: {course.parts.reduce((sum, parts) => {
                return sum + parts.exercises
            }, 0)}</b></p>
        </div>
    )
}

export default Course