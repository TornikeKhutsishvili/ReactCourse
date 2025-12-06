class State {

  constructor() {
    const saved = JSON.parse(localStorage.getItem("todo-data"));
    this.state = saved || {
      exerciseValue: "",
      exercises: [
        { id: 1, exercise: "Write code", done: false },
        { id: 2, exercise: "Go for a walk", done: false }
      ],
    };
  }


  // save
  saveToLocalStorage() {
    localStorage.setItem("todo-data", JSON.stringify(this.state));
  }

  // set value
  setExerciseValue(value) {
    this.state.exerciseValue = value;
    this.saveToLocalStorage();
  }

  // add
  addExercise() {
    if (!this.state.exerciseValue.trim()) return;

    const newExercise = {
      id: Date.now(),
      exercise: this.state.exerciseValue,
      done: false,
    };

    this.state.exercises.push(newExercise);
    this.state.exerciseValue = "";
    this.saveToLocalStorage();
  }

  // done
  markDone(id) {
    this.state.exercises = this.state.exercises.map((ex) =>
      ex.id === id ? { ...ex, done: true } : ex
    );
    this.saveToLocalStorage();
  }

  // back todo
  markNotDone(id) {
    this.state.exercises = this.state.exercises.map((ex) =>
      ex.id === id ? { ...ex, done: false } : ex
    );
    this.saveToLocalStorage();
  }

  // remove
  removeExercise(id) {
    this.state.exercises = this.state.exercises.filter((ex) => ex.id !== id);
    this.saveToLocalStorage();
  }

}
// localStorage.clear();

export default new State();
