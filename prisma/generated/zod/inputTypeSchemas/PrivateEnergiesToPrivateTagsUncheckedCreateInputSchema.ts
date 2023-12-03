import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToPrivateTagsUncheckedCreateInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUncheckedCreateInput> = z.object({
  energyId: z.number().int(),
  tagId: z.number().int()
}).strict();

export default PrivateEnergiesToPrivateTagsUncheckedCreateInputSchema;
