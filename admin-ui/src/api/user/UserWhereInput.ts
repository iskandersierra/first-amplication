import { TaskListRelationFilter } from "../task/TaskListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type UserWhereInput = {
  assignedTasks?: TaskListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  ownedProjects?: ProjectListRelationFilter;
  username?: StringFilter;
};
