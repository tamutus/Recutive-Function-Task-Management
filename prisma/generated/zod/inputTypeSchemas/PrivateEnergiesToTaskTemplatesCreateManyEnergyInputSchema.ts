import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTaskTemplatesCreateManyEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesCreateManyEnergyInput> = z.object({
  taskId: z.number().int()
}).strict();

export default PrivateEnergiesToTaskTemplatesCreateManyEnergyInputSchema;
