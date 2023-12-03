import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToTasksUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksUpdateManyMutationInputSchema'
import { PrivateTagsToTasksUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksUncheckedUpdateManyInputSchema'
import { PrivateTagsToTasksWhereInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksWhereInputSchema'

export const PrivateTagsToTasksUpdateManyArgsSchema: z.ZodType<Prisma.PrivateTagsToTasksUpdateManyArgs> = z.object({
  data: z.union([ PrivateTagsToTasksUpdateManyMutationInputSchema,PrivateTagsToTasksUncheckedUpdateManyInputSchema ]),
  where: PrivateTagsToTasksWhereInputSchema.optional(),
}).strict()

export default PrivateTagsToTasksUpdateManyArgsSchema;
