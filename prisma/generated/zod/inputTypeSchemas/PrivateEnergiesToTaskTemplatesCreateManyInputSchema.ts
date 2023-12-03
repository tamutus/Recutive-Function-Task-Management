import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTaskTemplatesCreateManyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesCreateManyInput> = z.object({
  taskId: z.number().int(),
  energyId: z.number().int()
}).strict();

export default PrivateEnergiesToTaskTemplatesCreateManyInputSchema;
