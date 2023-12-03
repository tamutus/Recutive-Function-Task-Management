import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToPersonsCreateManyInputSchema } from '../inputTypeSchemas/EnergiesToPersonsCreateManyInputSchema'

export const EnergiesToPersonsCreateManyArgsSchema: z.ZodType<Prisma.EnergiesToPersonsCreateManyArgs> = z.object({
  data: z.union([ EnergiesToPersonsCreateManyInputSchema,EnergiesToPersonsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default EnergiesToPersonsCreateManyArgsSchema;
