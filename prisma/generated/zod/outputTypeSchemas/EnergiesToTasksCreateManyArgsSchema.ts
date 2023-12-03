import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTasksCreateManyInputSchema } from '../inputTypeSchemas/EnergiesToTasksCreateManyInputSchema'

export const EnergiesToTasksCreateManyArgsSchema: z.ZodType<Prisma.EnergiesToTasksCreateManyArgs> = z.object({
  data: z.union([ EnergiesToTasksCreateManyInputSchema,EnergiesToTasksCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default EnergiesToTasksCreateManyArgsSchema;
