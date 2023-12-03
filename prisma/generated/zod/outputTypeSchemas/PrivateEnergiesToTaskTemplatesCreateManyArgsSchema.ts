import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTaskTemplatesCreateManyInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesCreateManyInputSchema'

export const PrivateEnergiesToTaskTemplatesCreateManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesCreateManyArgs> = z.object({
  data: z.union([ PrivateEnergiesToTaskTemplatesCreateManyInputSchema,PrivateEnergiesToTaskTemplatesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PrivateEnergiesToTaskTemplatesCreateManyArgsSchema;
