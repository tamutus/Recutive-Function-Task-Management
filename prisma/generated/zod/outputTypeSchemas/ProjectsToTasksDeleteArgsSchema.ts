import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTasksIncludeSchema } from '../inputTypeSchemas/ProjectsToTasksIncludeSchema'
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

export const ProjectsToTasksDeleteArgsSchema: z.ZodType<Prisma.ProjectsToTasksDeleteArgs> = z.object({
  select: ProjectsToTasksSelectSchema.optional(),
  include: ProjectsToTasksIncludeSchema.optional(),
  where: ProjectsToTasksWhereUniqueInputSchema,
}).strict()

export default ProjectsToTasksDeleteArgsSchema;