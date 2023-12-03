import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToProjectTemplatesUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesUpdateManyMutationInputSchema'
import { PrivateTagsToProjectTemplatesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesUncheckedUpdateManyInputSchema'
import { PrivateTagsToProjectTemplatesWhereInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesWhereInputSchema'

export const PrivateTagsToProjectTemplatesUpdateManyArgsSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesUpdateManyArgs> = z.object({
  data: z.union([ PrivateTagsToProjectTemplatesUpdateManyMutationInputSchema,PrivateTagsToProjectTemplatesUncheckedUpdateManyInputSchema ]),
  where: PrivateTagsToProjectTemplatesWhereInputSchema.optional(),
}).strict()

export default PrivateTagsToProjectTemplatesUpdateManyArgsSchema;
