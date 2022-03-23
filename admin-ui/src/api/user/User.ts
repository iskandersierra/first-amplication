import { Task } from "../task/Task";
import { Project } from "../project/Project";

export type User = {
  assignedTasks?: Array<Task>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  ownedProjects?: Array<Project>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
