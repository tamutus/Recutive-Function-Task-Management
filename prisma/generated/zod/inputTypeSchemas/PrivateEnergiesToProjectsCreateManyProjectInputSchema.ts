import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToProjectsCreateManyProjectInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsCreateManyProjectInput> = z.object({
  energyId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrivateEnergiesToProjectsCreateManyProjectInputSchema;
