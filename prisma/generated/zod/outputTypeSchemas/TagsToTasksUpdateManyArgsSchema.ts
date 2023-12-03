import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsToTasksUpdateManyMutationInputSchema } from '../inputTypeSchemas/TagsToTasksUpdateManyMutationInputSchema'
import { TagsToTasksUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TagsToTasksUncheckedUpdateManyInputSchema'
import { TagsToTasksWhereInputSchema } from '../inputTypeSchemas/TagsToTasksWhereInputSchema'

export const TagsToTasksUpdateManyArgsSchema: z.ZodType<Prisma.TagsToTasksUpdateManyArgs> = z.object({
  data: z.union([ TagsToTasksUpdateManyMutationInputSchema,TagsToTasksUncheckedUpdateManyInputSchema ]),
  where: TagsToTasksWhereInputSchema.optional(),
}).strict()

export default TagsToTasksUpdateManyArgsSchema;
