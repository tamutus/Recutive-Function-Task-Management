import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToProjectsCreateManyInputSchema } from '../inputTypeSchemas/EnergiesToProjectsCreateManyInputSchema'

export const EnergiesToProjectsCreateManyArgsSchema: z.ZodType<Prisma.EnergiesToProjectsCreateManyArgs> = z.object({
  data: z.union([ EnergiesToProjectsCreateManyInputSchema,EnergiesToProjectsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default EnergiesToProjectsCreateManyArgsSchema;
