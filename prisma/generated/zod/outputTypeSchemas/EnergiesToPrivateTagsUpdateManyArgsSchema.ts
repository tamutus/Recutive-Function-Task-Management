import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToPrivateTagsUpdateManyMutationInputSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsUpdateManyMutationInputSchema'
import { EnergiesToPrivateTagsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsUncheckedUpdateManyInputSchema'
import { EnergiesToPrivateTagsWhereInputSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsWhereInputSchema'

export const EnergiesToPrivateTagsUpdateManyArgsSchema: z.ZodType<Prisma.EnergiesToPrivateTagsUpdateManyArgs> = z.object({
  data: z.union([ EnergiesToPrivateTagsUpdateManyMutationInputSchema,EnergiesToPrivateTagsUncheckedUpdateManyInputSchema ]),
  where: EnergiesToPrivateTagsWhereInputSchema.optional(),
}).strict()

export default EnergiesToPrivateTagsUpdateManyArgsSchema;
