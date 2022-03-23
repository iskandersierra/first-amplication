import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskUpdateInput = {
  assignedTo?: UserWhereUniqueInput | null;
  estimationDays?: number | null;
  project?: ProjectWhereUniqueInput;
  startDate?: Date | null;
  status?: "New" | "Pending" | "Ongoing" | "Done";
  title?: string;
};
