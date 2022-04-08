const dataset = {
  tasks: {
    "task-1": { id: "task-1", content: "Content for task 1" },
    "task-2": { id: "task-2", content: "Content for task-2" },
    "task-3": { id: "task-3", content: "Content for task-3" },
    "task-4": { id: "task-4", content: "Content for task-4" },
    "task-5": { id: "task-5", content: "Content for task-5" },
    "task-6": {
      id: "task-6",
      content:
        "Content for task-6 Content for task-6 Content for task-6 Content for task-6 Content for task-6",
    },
  },
  columns: {
    "column-1": { id: "column-1", title: "A fazer", taskIds: ["task-1"] },
    "column-2": {
      id: "column-2",
      title: "Fazendo",
      taskIds: ["task-2", "task-3"],
    },
    "column-3": { id: "column-3", title: "Revisão", taskIds: [] },
    "column-4": { id: "column-4", title: "Finalizado", taskIds: ["task-4"] },
    "column-5": { id: "column-5", title: "Refatorando", taskIds: ["task-5"] },
    "column-6": { id: "column-6", title: "Deploy", taskIds: ["task-6"] },
  },
  columnOrder: [
    "column-1",
    "column-2",
    "column-3",
    "column-4",
    "column-5",
    "column-6",
  ],
};
export default dataset;
