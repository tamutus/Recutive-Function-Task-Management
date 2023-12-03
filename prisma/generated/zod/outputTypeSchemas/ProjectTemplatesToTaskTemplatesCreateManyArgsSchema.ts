import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplatesToTaskTemplatesCreateManyInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTaskTemplatesCreateManyInputSchema'

export const ProjectTemplatesToTaskTemplatesCreateManyArgsSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesCreateManyArgs> = z.object({
  data: z.union([ ProjectTemplatesToTaskTemplatesCreateManyInputSchema,ProjectTemplatesToTaskTemplatesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default ProjectTemplatesToTaskTemplatesCreateManyArgsSchema;
