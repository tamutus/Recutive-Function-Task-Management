import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTaskWorksCreateManyInputSchema } from '../inputTypeSchemas/EnergiesToTaskWorksCreateManyInputSchema'

export const EnergiesToTaskWorksCreateManyArgsSchema: z.ZodType<Prisma.EnergiesToTaskWorksCreateManyArgs> = z.object({
  data: z.union([ EnergiesToTaskWorksCreateManyInputSchema,EnergiesToTaskWorksCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default EnergiesToTaskWorksCreateManyArgsSchema;
