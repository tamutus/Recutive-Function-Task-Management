import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplateArgsSchema } from "../outputTypeSchemas/ProjectTemplateArgsSchema"
import { TaskTemplateArgsSchema } from "../outputTypeSchemas/TaskTemplateArgsSchema"

export const ProjectTemplatesToTaskTemplatesIncludeSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesInclude> = z.object({
  project: z.union([z.boolean(),z.lazy(() => ProjectTemplateArgsSchema)]).optional(),
  task: z.union([z.boolean(),z.lazy(() => TaskTemplateArgsSchema)]).optional(),
}).strict()

export default ProjectTemplatesToTaskTemplatesIncludeSchema;
