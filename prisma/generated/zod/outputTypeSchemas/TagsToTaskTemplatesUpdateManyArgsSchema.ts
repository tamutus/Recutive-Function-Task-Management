import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsToTaskTemplatesUpdateManyMutationInputSchema } from '../inputTypeSchemas/TagsToTaskTemplatesUpdateManyMutationInputSchema'
import { TagsToTaskTemplatesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TagsToTaskTemplatesUncheckedUpdateManyInputSchema'
import { TagsToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/TagsToTaskTemplatesWhereInputSchema'

export const TagsToTaskTemplatesUpdateManyArgsSchema: z.ZodType<Prisma.TagsToTaskTemplatesUpdateManyArgs> = z.object({
  data: z.union([ TagsToTaskTemplatesUpdateManyMutationInputSchema,TagsToTaskTemplatesUncheckedUpdateManyInputSchema ]),
  where: TagsToTaskTemplatesWhereInputSchema.optional(),
}).strict()

export default TagsToTaskTemplatesUpdateManyArgsSchema;
