import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTasksIncludeSchema } from '../inputTypeSchemas/ProjectsToTasksIncludeSchema'
import { ProjectsToTasksWhereInputSchema } from '../inputTypeSchemas/ProjectsToTasksWhereInputSchema'
import { ProjectsToTasksOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProjectsToTasksOrderByWithRelationInputSchema'
import { ProjectsToTasksWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectsToTasksWhereUniqueInputSchema'
import { ProjectsToTasksScalarFieldEnumSchema } from '../inputTypeSchemas/ProjectsToTasksScalarFieldEnumSchema'
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

export const ProjectsToTasksFindFirstArgsSchema: z.ZodType<Prisma.ProjectsToTasksFindFirstArgs> = z.object({
  select: ProjectsToTasksSelectSchema.optional(),
  include: ProjectsToTasksIncludeSchema.optional(),
  where: ProjectsToTasksWhereInputSchema.optional(),
  orderBy: z.union([ ProjectsToTasksOrderByWithRelationInputSchema.array(),ProjectsToTasksOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectsToTasksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProjectsToTasksScalarFieldEnumSchema,ProjectsToTasksScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default ProjectsToTasksFindFirstArgsSchema;
