import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/TagsToTaskTemplatesWhereInputSchema'

export const TagsToTaskTemplatesDeleteManyArgsSchema: z.ZodType<Prisma.TagsToTaskTemplatesDeleteManyArgs> = z.object({
  where: TagsToTaskTemplatesWhereInputSchema.optional(),
}).strict()

export default TagsToTaskTemplatesDeleteManyArgsSchema;
