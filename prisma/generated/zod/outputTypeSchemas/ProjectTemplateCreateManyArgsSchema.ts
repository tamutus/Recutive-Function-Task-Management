import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplateCreateManyInputSchema } from '../inputTypeSchemas/ProjectTemplateCreateManyInputSchema'

export const ProjectTemplateCreateManyArgsSchema: z.ZodType<Prisma.ProjectTemplateCreateManyArgs> = z.object({
  data: z.union([ ProjectTemplateCreateManyInputSchema,ProjectTemplateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default ProjectTemplateCreateManyArgsSchema;
