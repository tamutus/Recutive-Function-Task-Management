import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTagsCreateManyInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsCreateManyInputSchema'

export const PrivateEnergiesToTagsCreateManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTagsCreateManyArgs> = z.object({
  data: z.union([ PrivateEnergiesToTagsCreateManyInputSchema,PrivateEnergiesToTagsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PrivateEnergiesToTagsCreateManyArgsSchema;
