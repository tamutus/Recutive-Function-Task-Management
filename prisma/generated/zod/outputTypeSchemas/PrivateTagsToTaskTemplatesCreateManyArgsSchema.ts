import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToTaskTemplatesCreateManyInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesCreateManyInputSchema'

export const PrivateTagsToTaskTemplatesCreateManyArgsSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesCreateManyArgs> = z.object({
  data: z.union([ PrivateTagsToTaskTemplatesCreateManyInputSchema,PrivateTagsToTaskTemplatesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PrivateTagsToTaskTemplatesCreateManyArgsSchema;
