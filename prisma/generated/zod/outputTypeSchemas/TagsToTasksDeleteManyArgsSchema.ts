import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsToTasksWhereInputSchema } from '../inputTypeSchemas/TagsToTasksWhereInputSchema'

export const TagsToTasksDeleteManyArgsSchema: z.ZodType<Prisma.TagsToTasksDeleteManyArgs> = z.object({
  where: TagsToTasksWhereInputSchema.optional(),
}).strict()

export default TagsToTasksDeleteManyArgsSchema;
