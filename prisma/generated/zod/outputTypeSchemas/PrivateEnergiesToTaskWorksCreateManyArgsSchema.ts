import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTaskWorksCreateManyInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksCreateManyInputSchema'

export const PrivateEnergiesToTaskWorksCreateManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksCreateManyArgs> = z.object({
  data: z.union([ PrivateEnergiesToTaskWorksCreateManyInputSchema,PrivateEnergiesToTaskWorksCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PrivateEnergiesToTaskWorksCreateManyArgsSchema;
