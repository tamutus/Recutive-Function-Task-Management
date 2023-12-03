import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToProjectTemplatesCreateManyEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesCreateManyEnergyInput> = z.object({
  projectId: z.number().int()
}).strict();

export default PrivateEnergiesToProjectTemplatesCreateManyEnergyInputSchema;
