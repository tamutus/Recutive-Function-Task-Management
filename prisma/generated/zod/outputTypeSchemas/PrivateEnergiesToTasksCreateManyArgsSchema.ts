import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTasksCreateManyInputSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksCreateManyInputSchema'

export const PrivateEnergiesToTasksCreateManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTasksCreateManyArgs> = z.object({
  data: z.union([ PrivateEnergiesToTasksCreateManyInputSchema,PrivateEnergiesToTasksCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PrivateEnergiesToTasksCreateManyArgsSchema;
