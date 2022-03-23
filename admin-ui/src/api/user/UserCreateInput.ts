import { TaskCreateNestedManyWithoutUsersInput } from "./TaskCreateNestedManyWithoutUsersInput";
import { ProjectCreateNestedManyWithoutUsersInput } from "./ProjectCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  assignedTasks?: TaskCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  ownedProjects?: ProjectCreateNestedManyWithoutUsersInput;
  password: string;
  roles: Array<string>;
  username: string;
};
