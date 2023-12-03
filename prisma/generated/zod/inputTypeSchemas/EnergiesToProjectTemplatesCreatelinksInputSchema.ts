import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToProjectTemplatesCreatelinksInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesCreatelinksInput> = z.object({
  set: z.string().array()
}).strict();

export default EnergiesToProjectTemplatesCreatelinksInputSchema;
