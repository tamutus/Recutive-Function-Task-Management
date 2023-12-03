import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToProjectsCreateManyEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsCreateManyEnergyInput> = z.object({
  projectId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrivateEnergiesToProjectsCreateManyEnergyInputSchema;
