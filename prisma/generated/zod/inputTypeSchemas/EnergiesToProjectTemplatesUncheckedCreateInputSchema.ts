import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesCreatelinksInputSchema } from './EnergiesToProjectTemplatesCreatelinksInputSchema';

export const EnergiesToProjectTemplatesUncheckedCreateInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesUncheckedCreateInput> = z.object({
  projectId: z.number().int(),
  energyId: z.number().int(),
  links: z.union([ z.lazy(() => EnergiesToProjectTemplatesCreatelinksInputSchema),z.string().array() ]).optional(),
  info: z.string().optional().nullable()
}).strict();

export default EnergiesToProjectTemplatesUncheckedCreateInputSchema;
