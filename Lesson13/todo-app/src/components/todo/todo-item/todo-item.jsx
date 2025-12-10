import { Component } from "react";
import State from "../../state";

class TodoItem extends Component {

  shouldComponentUpdate(nextProps) {
    console.log("shouldComponentUpdate in ToDoItem");
    return nextProps.exercise !== this.props.exercise || nextProps.done !== this.props.done;
  }

  handleDone = () => {
    State.markDone(this.props.id);
    console.log("click handleDone in ToDoItem");
  };

  handleDelete = () => {
    State.removeExercise(this.props.id);
    console.log("click handleDelete in ToDoItem");
  };

  render() {
    const { exercise } = this.props;
    return (
      <tr>
        <td>{exercise}</td>
        <td className="text-end">
          <button className="btn btn-success me-2" onClick={this.handleDone}>
            done
          </button>
          <button className="btn btn-danger" onClick={this.handleDelete}>
            delete
          </button>
        </td>
      </tr>
    );
  }

}

export default TodoItem;
