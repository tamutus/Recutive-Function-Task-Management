import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTaskTemplatesUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesUpdateManyMutationInputSchema'
import { PrivateEnergiesToTaskTemplatesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesUncheckedUpdateManyInputSchema'
import { PrivateEnergiesToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesWhereInputSchema'

export const PrivateEnergiesToTaskTemplatesUpdateManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesUpdateManyArgs> = z.object({
  data: z.union([ PrivateEnergiesToTaskTemplatesUpdateManyMutationInputSchema,PrivateEnergiesToTaskTemplatesUncheckedUpdateManyInputSchema ]),
  where: PrivateEnergiesToTaskTemplatesWhereInputSchema.optional(),
}).strict()

export default PrivateEnergiesToTaskTemplatesUpdateManyArgsSchema;
