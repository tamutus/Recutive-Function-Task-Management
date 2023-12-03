import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToProjectTemplatesCreateManyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesCreateManyInput> = z.object({
  projectId: z.number().int(),
  energyId: z.number().int()
}).strict();

export default PrivateEnergiesToProjectTemplatesCreateManyInputSchema;
