import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplatesToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesWhereInputSchema'

export const ProjectTemplatesToTaskTemplatesDeleteManyArgsSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesDeleteManyArgs> = z.object({
  where: ProjectTemplatesToTaskTemplatesWhereInputSchema.optional(),
}).strict()

export default ProjectTemplatesToTaskTemplatesDeleteManyArgsSchema;
