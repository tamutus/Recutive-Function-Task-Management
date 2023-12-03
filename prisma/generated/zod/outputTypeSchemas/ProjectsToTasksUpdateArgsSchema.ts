import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTasksIncludeSchema } from '../inputTypeSchemas/ProjectsToTasksIncludeSchema'
import { ProjectsToTasksUpdateInputSchema } from '../inputTypeSchemas/ProjectsToTasksUpdateInputSchema'
import { ProjectsToTasksUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProjectsToTasksUncheckedUpdateInputSchema'
import { ProjectsToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectsToTasksWhereUniqueInputSchema'
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

export const ProjectsToTasksUpdateArgsSchema: z.ZodType<Prisma.ProjectsToTasksUpdateArgs> = z.object({
  select: ProjectsToTasksSelectSchema.optional(),
  include: ProjectsToTasksIncludeSchema.optional(),
  data: z.union([ ProjectsToTasksUpdateInputSchema,ProjectsToTasksUncheckedUpdateInputSchema ]),
  where: ProjectsToTasksWhereUniqueInputSchema,
}).strict()

export default ProjectsToTasksUpdateArgsSchema;
