import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTasksIncludeSchema } from '../inputTypeSchemas/ProjectsToTasksIncludeSchema'
import { ProjectsToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectsToTasksWhereUniqueInputSchema'
import { ProjectsToTasksCreateInputSchema } from '../inputTypeSchemas/ProjectsToTasksCreateInputSchema'
import { ProjectsToTasksUncheckedCreateInputSchema } from '../inputTypeSchemas/ProjectsToTasksUncheckedCreateInputSchema'
import { ProjectsToTasksUpdateInputSchema } from '../inputTypeSchemas/ProjectsToTasksUpdateInputSchema'
import { ProjectsToTasksUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProjectsToTasksUncheckedUpdateInputSchema'
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

export const ProjectsToTasksUpsertArgsSchema: z.ZodType<Prisma.ProjectsToTasksUpsertArgs> = z.object({
  select: ProjectsToTasksSelectSchema.optional(),
  include: ProjectsToTasksIncludeSchema.optional(),
  where: ProjectsToTasksWhereUniqueInputSchema,
  create: z.union([ ProjectsToTasksCreateInputSchema,ProjectsToTasksUncheckedCreateInputSchema ]),
  update: z.union([ ProjectsToTasksUpdateInputSchema,ProjectsToTasksUncheckedUpdateInputSchema ]),
}).strict()

export default ProjectsToTasksUpsertArgsSchema;
