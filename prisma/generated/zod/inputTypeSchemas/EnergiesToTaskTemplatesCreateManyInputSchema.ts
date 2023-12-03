import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesCreatelinksInputSchema } from './EnergiesToTaskTemplatesCreatelinksInputSchema';

export const EnergiesToTaskTemplatesCreateManyInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesCreateManyInput> = z.object({
  taskId: z.number().int(),
  energyId: z.number().int(),
  info: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => EnergiesToTaskTemplatesCreatelinksInputSchema),z.string().array() ]).optional(),
}).strict();

export default EnergiesToTaskTemplatesCreateManyInputSchema;