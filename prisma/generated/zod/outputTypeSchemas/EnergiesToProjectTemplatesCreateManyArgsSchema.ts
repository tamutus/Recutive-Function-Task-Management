import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToProjectTemplatesCreateManyInputSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesCreateManyInputSchema'

export const EnergiesToProjectTemplatesCreateManyArgsSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesCreateManyArgs> = z.object({
  data: z.union([ EnergiesToProjectTemplatesCreateManyInputSchema,EnergiesToProjectTemplatesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default EnergiesToProjectTemplatesCreateManyArgsSchema;
