import {atom} from 'recoil';

export const filterAtom = atom({
  key: "filterAtom",
  default: ''
});

const initialTodos = [
  { title: "Buy groceries", description: "Milk, Bread, Eggs" },
  { title: "Morning run", description: "Run 5km around the park" },
  { title: "Finish project", description: "Complete the React project by today" },
  { title: "Go to gym", description: "Leg day workout" },
  { title: "Read a book", description: "Finish reading 'Atomic Habits'" },
  { title: "Prepare lunch", description: "Make a salad and grilled chicken" },
  { title: "Visit parents", description: "Spend some time with family" },
  { title: "Go to gym", description: "Chest and back workout" },
  { title: "Watch a movie", description: "Watch 'Inception' tonight" },
  { title: "Clean the house", description: "Vacuum and dust the living room" },
  { title: "Write a blog post", description: "Write about web development trends" },
  { title: "Go to gym", description: "Cardio and core workout" },
  { title: "Plan a trip", description: "Research destinations for the weekend" },
  { title: "Go to gym", description: "Arm day workout" },
  { title: "Call a friend", description: "Catch up with John over the phone" },
  { title: "Organize desk", description: "Declutter and organize the workspace" },
  { title: "Go to gym", description: "Full body workout" },
  { title: "Review finances", description: "Check bank statements and budget" },
  { title: "Go grocery shopping", description: "Buy ingredients for the week" },
  { title: "Work on side project", description: "Develop features for a side app" },
  { title: "Go to gym", description: "Leg day workout again" },
  { title: "Meditate", description: "15 minutes of mindfulness meditation" },
  { title: "Go to gym", description: "HIIT workout" },
  { title: "Take out the trash", description: "Dispose of the household garbage" },
  { title: "Read the news", description: "Catch up on current events" },
];



export const todosAtom =  atom({
  key : "todoAtom",
  default : initialTodos
  
});