import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToProjectTemplatesCreateManyInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesCreateManyInputSchema'

export const PrivateTagsToProjectTemplatesCreateManyArgsSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesCreateManyArgs> = z.object({
  data: z.union([ PrivateTagsToProjectTemplatesCreateManyInputSchema,PrivateTagsToProjectTemplatesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PrivateTagsToProjectTemplatesCreateManyArgsSchema;
