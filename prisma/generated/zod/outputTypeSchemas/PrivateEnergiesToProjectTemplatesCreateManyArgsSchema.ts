import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToProjectTemplatesCreateManyInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesCreateManyInputSchema'

export const PrivateEnergiesToProjectTemplatesCreateManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesCreateManyArgs> = z.object({
  data: z.union([ PrivateEnergiesToProjectTemplatesCreateManyInputSchema,PrivateEnergiesToProjectTemplatesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PrivateEnergiesToProjectTemplatesCreateManyArgsSchema;
