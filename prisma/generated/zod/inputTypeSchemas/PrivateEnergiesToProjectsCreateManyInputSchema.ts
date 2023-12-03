import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToProjectsCreateManyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsCreateManyInput> = z.object({
  projectId: z.number().int(),
  energyId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrivateEnergiesToProjectsCreateManyInputSchema;
