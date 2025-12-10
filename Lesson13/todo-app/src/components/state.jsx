import { Component } from "react";

class State extends Component {

  constructor() {
    super();
    const saved = JSON.parse(localStorage.getItem("todo-data"));
    this.state = saved || {
      exerciseValue: "",
      exercises: [],
      todos: 8,
    };
    this.listeners = [];

    console.log(saved)
  }

  subscribe(fn) {
    this.listeners.push(fn);
    console.log("subscribe in State (Global Store)");
  }

  notify() {
    this.listeners.forEach(fn => fn());
    console.log("notify in State (Global Store)");
  }

  setStoreState(update) {
    this.state = { ...this.state, ...update };
    localStorage.setItem("todo-data", JSON.stringify(this.state));
    this.notify();

    console.log("setStoreState in State (Global Store)");
  }

  setExerciseValue(value) {
    this.setStoreState({ exerciseValue: value });
    console.log("setExerciseValue in State (Global Store)");
  }

  addExercise() {
    if (!this.state.exerciseValue.trim()) return;
    const newExercise = {
      id: Date.now(),
      exercise: this.state.exerciseValue,
      done: false,
    };
    this.setStoreState({
      exercises: [...this.state.exercises, newExercise],
      exerciseValue: ""
    });

    console.log("addExercise in State (Global Store)");
  }

  markDone(id) {
    const updated = this.state.exercises.map(ex =>
      ex.id === id ? { ...ex, done: true } : ex
    );
    this.setStoreState({ exercises: updated });

    console.log("markDone in State (Global Store)");
  }

  markNotDone(id) {
    const updated = this.state.exercises.map(ex =>
      ex.id === id ? { ...ex, done: false } : ex
    );
    this.setStoreState({ exercises: updated });

    console.log("markNotDone in State (Global Store)");
  }

  removeExercise(id) {
    const filtered = this.state.exercises.filter(ex => ex.id !== id);
    this.setStoreState({ exercises: filtered });

    console.log("removeExercise in State (Global Store)");
  }

  setTodos(arr) {
    this.setStoreState({ exercises: arr });
    console.log("setTodos in State (Global Store)");
  }

  loadFromLocalStorage() {
    const saved = JSON.parse(localStorage.getItem("todo-data"));
    if (saved) {
      this.state = saved;
      this.notify();
    }
  }

  mergeFetchedData(fetched) {
    const local = this.state.exercises;

    const merged = [...local];

    fetched.forEach(f => {
      const exists = local.find(l => l.id === f.id);
      if (!exists) {
        merged.push(f);
      }
    });

    this.setStoreState({ exercises: merged });
    console.log("Merged fetched data with localStorage");
  }

}

export default new State();
