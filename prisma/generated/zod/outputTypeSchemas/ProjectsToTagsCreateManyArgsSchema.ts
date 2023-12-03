import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectsToTagsCreateManyInputSchema } from '../inputTypeSchemas/ProjectsToTagsCreateManyInputSchema'

export const ProjectsToTagsCreateManyArgsSchema: z.ZodType<Prisma.ProjectsToTagsCreateManyArgs> = z.object({
  data: z.union([ ProjectsToTagsCreateManyInputSchema,ProjectsToTagsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default ProjectsToTagsCreateManyArgsSchema;
