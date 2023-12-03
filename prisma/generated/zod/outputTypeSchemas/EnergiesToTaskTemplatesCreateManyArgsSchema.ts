import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTaskTemplatesCreateManyInputSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesCreateManyInputSchema'

export const EnergiesToTaskTemplatesCreateManyArgsSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesCreateManyArgs> = z.object({
  data: z.union([ EnergiesToTaskTemplatesCreateManyInputSchema,EnergiesToTaskTemplatesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default EnergiesToTaskTemplatesCreateManyArgsSchema;
