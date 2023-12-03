import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTagsUncheckedCreateInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsUncheckedCreateInput> = z.object({
  energyId: z.number().int(),
  tagId: z.number().int()
}).strict();

export default PrivateEnergiesToTagsUncheckedCreateInputSchema;
