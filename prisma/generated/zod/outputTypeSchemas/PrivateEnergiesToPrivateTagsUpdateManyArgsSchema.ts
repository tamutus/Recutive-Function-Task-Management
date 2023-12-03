import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToPrivateTagsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsUpdateManyMutationInputSchema'
import { PrivateEnergiesToPrivateTagsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsUncheckedUpdateManyInputSchema'
import { PrivateEnergiesToPrivateTagsWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsWhereInputSchema'

export const PrivateEnergiesToPrivateTagsUpdateManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUpdateManyArgs> = z.object({
  data: z.union([ PrivateEnergiesToPrivateTagsUpdateManyMutationInputSchema,PrivateEnergiesToPrivateTagsUncheckedUpdateManyInputSchema ]),
  where: PrivateEnergiesToPrivateTagsWhereInputSchema.optional(),
}).strict()

export default PrivateEnergiesToPrivateTagsUpdateManyArgsSchema;
