import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToPrivateTagsCreateManyInputSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsCreateManyInputSchema'

export const EnergiesToPrivateTagsCreateManyArgsSchema: z.ZodType<Prisma.EnergiesToPrivateTagsCreateManyArgs> = z.object({
  data: z.union([ EnergiesToPrivateTagsCreateManyInputSchema,EnergiesToPrivateTagsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default EnergiesToPrivateTagsCreateManyArgsSchema;
