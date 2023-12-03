import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplatesToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesIncludeSchema'
import { ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema'
import { ProjectTemplatesToTaskTemplatesCreateInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesCreateInputSchema'
import { ProjectTemplatesToTaskTemplatesUncheckedCreateInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesUncheckedCreateInputSchema'
import { ProjectTemplatesToTaskTemplatesUpdateInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesUpdateInputSchema'
import { ProjectTemplatesToTaskTemplatesUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesUncheckedUpdateInputSchema'
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

export const ProjectTemplatesToTaskTemplatesUpsertArgsSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesUpsertArgs> = z.object({
  select: ProjectTemplatesToTaskTemplatesSelectSchema.optional(),
  include: ProjectTemplatesToTaskTemplatesIncludeSchema.optional(),
  where: ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema,
  create: z.union([ ProjectTemplatesToTaskTemplatesCreateInputSchema,ProjectTemplatesToTaskTemplatesUncheckedCreateInputSchema ]),
  update: z.union([ ProjectTemplatesToTaskTemplatesUpdateInputSchema,ProjectTemplatesToTaskTemplatesUncheckedUpdateInputSchema ]),
}).strict()

export default ProjectTemplatesToTaskTemplatesUpsertArgsSchema;
