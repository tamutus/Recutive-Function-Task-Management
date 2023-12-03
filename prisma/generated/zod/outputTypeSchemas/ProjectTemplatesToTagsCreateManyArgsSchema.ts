import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplatesToTagsCreateManyInputSchema } from '../inputTypeSchemas/ProjectTemplatesToTagsCreateManyInputSchema'

export const ProjectTemplatesToTagsCreateManyArgsSchema: z.ZodType<Prisma.ProjectTemplatesToTagsCreateManyArgs> = z.object({
  data: z.union([ ProjectTemplatesToTagsCreateManyInputSchema,ProjectTemplatesToTagsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default ProjectTemplatesToTagsCreateManyArgsSchema;
