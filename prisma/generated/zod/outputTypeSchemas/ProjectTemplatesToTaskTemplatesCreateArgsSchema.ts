import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplatesToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesIncludeSchema'
import { ProjectTemplatesToTaskTemplatesCreateInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesCreateInputSchema'
import { ProjectTemplatesToTaskTemplatesUncheckedCreateInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesUncheckedCreateInputSchema'
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

export const ProjectTemplatesToTaskTemplatesCreateArgsSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesCreateArgs> = z.object({
  select: ProjectTemplatesToTaskTemplatesSelectSchema.optional(),
  include: ProjectTemplatesToTaskTemplatesIncludeSchema.optional(),
  data: z.union([ ProjectTemplatesToTaskTemplatesCreateInputSchema,ProjectTemplatesToTaskTemplatesUncheckedCreateInputSchema ]),
}).strict()

export default ProjectTemplatesToTaskTemplatesCreateArgsSchema;
