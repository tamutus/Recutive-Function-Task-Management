import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToProjectsCreateManyInputSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsCreateManyInputSchema'

export const PrivateEnergiesToProjectsCreateManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsCreateManyArgs> = z.object({
  data: z.union([ PrivateEnergiesToProjectsCreateManyInputSchema,PrivateEnergiesToProjectsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PrivateEnergiesToProjectsCreateManyArgsSchema;
