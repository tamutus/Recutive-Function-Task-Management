import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToProjectsCreatelinksInputSchema: z.ZodType<Prisma.EnergiesToProjectsCreatelinksInput> = z.object({
  set: z.string().array()
}).strict();

export default EnergiesToProjectsCreatelinksInputSchema;
