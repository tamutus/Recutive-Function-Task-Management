import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToPrivateTagsCreateManyInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsCreateManyInput> = z.object({
  energyId: z.number().int(),
  tagId: z.number().int()
}).strict();

export default PrivateEnergiesToPrivateTagsCreateManyInputSchema;
