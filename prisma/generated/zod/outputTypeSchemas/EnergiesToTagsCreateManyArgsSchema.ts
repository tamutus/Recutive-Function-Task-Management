import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTagsCreateManyInputSchema } from '../inputTypeSchemas/EnergiesToTagsCreateManyInputSchema'

export const EnergiesToTagsCreateManyArgsSchema: z.ZodType<Prisma.EnergiesToTagsCreateManyArgs> = z.object({
  data: z.union([ EnergiesToTagsCreateManyInputSchema,EnergiesToTagsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default EnergiesToTagsCreateManyArgsSchema;
