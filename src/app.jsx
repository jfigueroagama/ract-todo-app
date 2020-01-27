class Todo extends React.Component {
  render() {

    let checked = (this.props.done == "true");

    return <div className="todo">
            <span>
              <input type="checkbox" checked={checked}/>
              <input type="text" value={this.props.text}/>
            </span>
          </div>;
  }
}

ReactDOM.render(
  <Todo text="Test 1" done = "true" />,      //This is a constructor to create an object of the Todo class
  document.getElementById('root')
);
