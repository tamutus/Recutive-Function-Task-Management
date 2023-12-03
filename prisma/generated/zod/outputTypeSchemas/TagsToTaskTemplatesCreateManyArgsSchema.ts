import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsToTaskTemplatesCreateManyInputSchema } from '../inputTypeSchemas/TagsToTaskTemplatesCreateManyInputSchema'

export const TagsToTaskTemplatesCreateManyArgsSchema: z.ZodType<Prisma.TagsToTaskTemplatesCreateManyArgs> = z.object({
  data: z.union([ TagsToTaskTemplatesCreateManyInputSchema,TagsToTaskTemplatesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default TagsToTaskTemplatesCreateManyArgsSchema;
