import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplateArgsSchema } from "../outputTypeSchemas/ProjectTemplateArgsSchema"
import { TaskTemplateArgsSchema } from "../outputTypeSchemas/TaskTemplateArgsSchema"

export const ProjectTemplatesToTaskTemplatesSelectSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesSelect> = z.object({
  projectId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  count: z.boolean().optional(),
  schedule: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectTemplateArgsSchema)]).optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
}).strict()

export default ProjectTemplatesToTaskTemplatesSelectSchema;
