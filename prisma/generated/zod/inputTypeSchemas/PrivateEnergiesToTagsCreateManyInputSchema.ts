import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTagsCreateManyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsCreateManyInput> = z.object({
  energyId: z.number().int(),
  tagId: z.number().int()
}).strict();

export default PrivateEnergiesToTagsCreateManyInputSchema;
