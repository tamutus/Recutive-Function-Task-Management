import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesCreateManyTaskInputSchema } from './EnergiesToTaskTemplatesCreateManyTaskInputSchema';

export const EnergiesToTaskTemplatesCreateManyTaskInputEnvelopeSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesCreateManyTaskInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EnergiesToTaskTemplatesCreateManyTaskInputSchema),z.lazy(() => EnergiesToTaskTemplatesCreateManyTaskInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EnergiesToTaskTemplatesCreateManyTaskInputEnvelopeSchema;
