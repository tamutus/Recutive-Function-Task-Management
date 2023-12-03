import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToProjectsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectsUpdateManyMutationInputSchema'
import { PrivateTagsToProjectsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectsUncheckedUpdateManyInputSchema'
import { PrivateTagsToProjectsWhereInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectsWhereInputSchema'

export const PrivateTagsToProjectsUpdateManyArgsSchema: z.ZodType<Prisma.PrivateTagsToProjectsUpdateManyArgs> = z.object({
  data: z.union([ PrivateTagsToProjectsUpdateManyMutationInputSchema,PrivateTagsToProjectsUncheckedUpdateManyInputSchema ]),
  where: PrivateTagsToProjectsWhereInputSchema.optional(),
}).strict()

export default PrivateTagsToProjectsUpdateManyArgsSchema;
