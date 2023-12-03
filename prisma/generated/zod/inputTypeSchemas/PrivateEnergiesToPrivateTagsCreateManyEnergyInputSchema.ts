import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToPrivateTagsCreateManyEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsCreateManyEnergyInput> = z.object({
  tagId: z.number().int()
}).strict();

export default PrivateEnergiesToPrivateTagsCreateManyEnergyInputSchema;
