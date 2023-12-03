import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsToTasksCreateManyInputSchema } from '../inputTypeSchemas/TagsToTasksCreateManyInputSchema'

export const TagsToTasksCreateManyArgsSchema: z.ZodType<Prisma.TagsToTasksCreateManyArgs> = z.object({
  data: z.union([ TagsToTasksCreateManyInputSchema,TagsToTasksCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default TagsToTasksCreateManyArgsSchema;
