export interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
}

export interface StudySubject {
  id: string;
  name: string;
  nextSession?: string;
}
