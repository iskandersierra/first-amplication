import { TaskUpdateManyWithoutUsersInput } from "./TaskUpdateManyWithoutUsersInput";
import { ProjectUpdateManyWithoutUsersInput } from "./ProjectUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  assignedTasks?: TaskUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  ownedProjects?: ProjectUpdateManyWithoutUsersInput;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
