const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };
  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    );
  };

  const Part = (props) => {
    const { name, exercises } = props.part;
    return (
      <div>
        <p>
          Name: {name} , exercises: {exercises}
        </p>
      </div>
    );
  };

  const Content = (props) => {
    const [part1, part2, part3] = props.parts;
    return (
      <div>
        <Part part={part1} />
        <Part part={part2} />
        <Part part={part3} />
      </div>
    );
  };

  const Total = (props) => {
    const [part1, part2, part3] = props.parts;

    return (
      <div>
        <p>
          There is a total of{' '}
          {part1.exercises + part2.exercises + part3.exercises} exercises
        </p>
      </div>
    );
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
