import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesCreatelinksInputSchema } from './EnergiesToProjectTemplatesCreatelinksInputSchema';

export const EnergiesToProjectTemplatesCreateManyProjectInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesCreateManyProjectInput> = z.object({
  energyId: z.number().int(),
  links: z.union([ z.lazy(() => EnergiesToProjectTemplatesCreatelinksInputSchema),z.string().array() ]).optional(),
  info: z.string().optional().nullable()
}).strict();

export default EnergiesToProjectTemplatesCreateManyProjectInputSchema;
