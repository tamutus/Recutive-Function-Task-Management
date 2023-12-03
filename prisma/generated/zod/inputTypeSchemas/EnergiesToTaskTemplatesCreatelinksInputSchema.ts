import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToTaskTemplatesCreatelinksInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesCreatelinksInput> = z.object({
  set: z.string().array()
}).strict();

export default EnergiesToTaskTemplatesCreatelinksInputSchema;
