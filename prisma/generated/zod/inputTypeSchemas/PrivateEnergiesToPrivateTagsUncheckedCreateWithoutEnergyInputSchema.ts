import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUncheckedCreateWithoutEnergyInput> = z.object({
  tagId: z.number().int()
}).strict();

export default PrivateEnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema;
