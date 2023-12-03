import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTagsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsUpdateManyMutationInputSchema'
import { PrivateEnergiesToTagsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsUncheckedUpdateManyInputSchema'
import { PrivateEnergiesToTagsWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsWhereInputSchema'

export const PrivateEnergiesToTagsUpdateManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTagsUpdateManyArgs> = z.object({
  data: z.union([ PrivateEnergiesToTagsUpdateManyMutationInputSchema,PrivateEnergiesToTagsUncheckedUpdateManyInputSchema ]),
  where: PrivateEnergiesToTagsWhereInputSchema.optional(),
}).strict()

export default PrivateEnergiesToTagsUpdateManyArgsSchema;
