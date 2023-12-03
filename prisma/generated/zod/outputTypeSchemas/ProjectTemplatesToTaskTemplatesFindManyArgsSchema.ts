import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplatesToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesIncludeSchema'
import { ProjectTemplatesToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesWhereInputSchema'
import { ProjectTemplatesToTaskTemplatesOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesOrderByWithRelationInputSchema'
import { ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema'
import { ProjectTemplatesToTaskTemplatesScalarFieldEnumSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesScalarFieldEnumSchema'
import { ProjectTemplateArgsSchema } from "../outputTypeSchemas/ProjectTemplateArgsSchema"
import { TaskTemplateArgsSchema } from "../outputTypeSchemas/TaskTemplateArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectTemplatesToTaskTemplatesSelectSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesSelect> = z.object({
  projectId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  count: z.boolean().optional(),
  schedule: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectTemplateArgsSchema)]).optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
}).strict()

export const ProjectTemplatesToTaskTemplatesFindManyArgsSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesFindManyArgs> = z.object({
  select: ProjectTemplatesToTaskTemplatesSelectSchema.optional(),
  include: ProjectTemplatesToTaskTemplatesIncludeSchema.optional(),
  where: ProjectTemplatesToTaskTemplatesWhereInputSchema.optional(),
  orderBy: z.union([ ProjectTemplatesToTaskTemplatesOrderByWithRelationInputSchema.array(),ProjectTemplatesToTaskTemplatesOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProjectTemplatesToTaskTemplatesScalarFieldEnumSchema,ProjectTemplatesToTaskTemplatesScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default ProjectTemplatesToTaskTemplatesFindManyArgsSchema;
