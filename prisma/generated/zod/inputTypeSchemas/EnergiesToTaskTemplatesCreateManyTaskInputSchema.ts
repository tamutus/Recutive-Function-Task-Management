import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesCreatelinksInputSchema } from './EnergiesToTaskTemplatesCreatelinksInputSchema';

export const EnergiesToTaskTemplatesCreateManyTaskInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesCreateManyTaskInput> = z.object({
  energyId: z.number().int(),
  info: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => EnergiesToTaskTemplatesCreatelinksInputSchema),z.string().array() ]).optional(),
}).strict();

export default EnergiesToTaskTemplatesCreateManyTaskInputSchema;
