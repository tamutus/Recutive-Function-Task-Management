import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToTaskTemplatesUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesUpdateManyMutationInputSchema'
import { PrivateTagsToTaskTemplatesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesUncheckedUpdateManyInputSchema'
import { PrivateTagsToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesWhereInputSchema'

export const PrivateTagsToTaskTemplatesUpdateManyArgsSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesUpdateManyArgs> = z.object({
  data: z.union([ PrivateTagsToTaskTemplatesUpdateManyMutationInputSchema,PrivateTagsToTaskTemplatesUncheckedUpdateManyInputSchema ]),
  where: PrivateTagsToTaskTemplatesWhereInputSchema.optional(),
}).strict()

export default PrivateTagsToTaskTemplatesUpdateManyArgsSchema;
