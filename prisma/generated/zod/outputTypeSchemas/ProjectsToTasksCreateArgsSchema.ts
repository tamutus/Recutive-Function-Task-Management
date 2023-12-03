import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTasksIncludeSchema } from '../inputTypeSchemas/ProjectsToTasksIncludeSchema'
import { ProjectsToTasksCreateInputSchema } from '../inputTypeSchemas/ProjectsToTasksCreateInputSchema'
import { ProjectsToTasksUncheckedCreateInputSchema } from '../inputTypeSchemas/ProjectsToTasksUncheckedCreateInputSchema'
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { TaskArgsSchema } from "../outputTypeSchemas/TaskArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectsToTasksSelectSchema: z.ZodType<Prisma.ProjectsToTasksSelect> = z.object({
  projectId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskArgsSchema)]).optional(),
}).strict()

export const ProjectsToTasksCreateArgsSchema: z.ZodType<Prisma.ProjectsToTasksCreateArgs> = z.object({
  select: ProjectsToTasksSelectSchema.optional(),
  include: ProjectsToTasksIncludeSchema.optional(),
  data: z.union([ ProjectsToTasksCreateInputSchema,ProjectsToTasksUncheckedCreateInputSchema ]),
}).strict()

export default ProjectsToTasksCreateArgsSchema;
