import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTagsUpdateManyMutationInputSchema } from '../inputTypeSchemas/EnergiesToTagsUpdateManyMutationInputSchema'
import { EnergiesToTagsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EnergiesToTagsUncheckedUpdateManyInputSchema'
import { EnergiesToTagsWhereInputSchema } from '../inputTypeSchemas/EnergiesToTagsWhereInputSchema'

export const EnergiesToTagsUpdateManyArgsSchema: z.ZodType<Prisma.EnergiesToTagsUpdateManyArgs> = z.object({
  data: z.union([ EnergiesToTagsUpdateManyMutationInputSchema,EnergiesToTagsUncheckedUpdateManyInputSchema ]),
  where: EnergiesToTagsWhereInputSchema.optional(),
}).strict()

export default EnergiesToTagsUpdateManyArgsSchema;
