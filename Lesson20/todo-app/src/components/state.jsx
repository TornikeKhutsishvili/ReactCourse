let listeners = [];

let state = {
  exerciseValue: "",
  exercises: [],
};

const notify = () => {
  listeners.forEach((fn) => fn());
};

const saveToLocalStorage = () => {
  localStorage.setItem("todo-data", JSON.stringify(state));
};

const loadFromLocalStorage = () => {
  const saved = JSON.parse(localStorage.getItem("todo-data"));
  if (saved) {
    state = saved;
  }
};

/* ---------- PUBLIC API ---------- */

const State = {
  getState() {
    return state;
  },

  subscribe(fn) {
    listeners.push(fn);
  },

  unsubscribe(fn) {
    listeners = listeners.filter((l) => l !== fn);
  },

  setExerciseValue(value) {
    state = { ...state, exerciseValue: value };
    saveToLocalStorage();
    notify();
  },

  addExercise() {
    if (!state.exerciseValue.trim()) return;

    const newExercise = {
      id: Date.now(),
      exercise: state.exerciseValue,
      done: false,
    };

    state = {
      ...state,
      exercises: [...state.exercises, newExercise],
      exerciseValue: "",
    };

    saveToLocalStorage();
    notify();
  },

  markDone(id) {
    state = {
      ...state,
      exercises: state.exercises.map((ex) =>
        ex.id === id ? { ...ex, done: true } : ex
      ),
    };

    saveToLocalStorage();
    notify();
  },

  markNotDone(id) {
    state = {
      ...state,
      exercises: state.exercises.map((ex) =>
        ex.id === id ? { ...ex, done: false } : ex
      ),
    };

    saveToLocalStorage();
    notify();
  },

  removeExercise(id) {
    state = {
      ...state,
      exercises: state.exercises.filter((ex) => ex.id !== id),
    };

    saveToLocalStorage();
    notify();
  },

  mergeFetchedData(fetched) {
    const merged = [...state.exercises];

    fetched.forEach((f) => {
      if (!merged.find((l) => l.id === f.id)) {
        merged.push(f);
      }
    });

    state = { ...state, exercises: merged };
    saveToLocalStorage();
    notify();
  },
};

/* ---------- INIT ---------- */
loadFromLocalStorage();

export default State;
