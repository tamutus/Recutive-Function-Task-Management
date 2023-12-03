import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"

export const ProjectsToTasksIncludeSchema: z.ZodType<Prisma.ProjectsToTasksInclude> = z.object({
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
}).strict()

export default ProjectsToTasksIncludeSchema;
