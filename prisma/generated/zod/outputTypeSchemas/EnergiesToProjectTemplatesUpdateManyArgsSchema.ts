import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToProjectTemplatesUpdateManyMutationInputSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesUpdateManyMutationInputSchema'
import { EnergiesToProjectTemplatesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesUncheckedUpdateManyInputSchema'
import { EnergiesToProjectTemplatesWhereInputSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesWhereInputSchema'

export const EnergiesToProjectTemplatesUpdateManyArgsSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesUpdateManyArgs> = z.object({
  data: z.union([ EnergiesToProjectTemplatesUpdateManyMutationInputSchema,EnergiesToProjectTemplatesUncheckedUpdateManyInputSchema ]),
  where: EnergiesToProjectTemplatesWhereInputSchema.optional(),
}).strict()

export default EnergiesToProjectTemplatesUpdateManyArgsSchema;
