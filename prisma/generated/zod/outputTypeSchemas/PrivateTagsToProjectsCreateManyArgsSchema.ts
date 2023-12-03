import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToProjectsCreateManyInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectsCreateManyInputSchema'

export const PrivateTagsToProjectsCreateManyArgsSchema: z.ZodType<Prisma.PrivateTagsToProjectsCreateManyArgs> = z.object({
  data: z.union([ PrivateTagsToProjectsCreateManyInputSchema,PrivateTagsToProjectsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PrivateTagsToProjectsCreateManyArgsSchema;
