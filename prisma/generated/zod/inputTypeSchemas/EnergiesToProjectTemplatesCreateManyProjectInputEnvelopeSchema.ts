import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesCreateManyProjectInputSchema } from './EnergiesToProjectTemplatesCreateManyProjectInputSchema';

export const EnergiesToProjectTemplatesCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EnergiesToProjectTemplatesCreateManyProjectInputSchema),z.lazy(() => EnergiesToProjectTemplatesCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EnergiesToProjectTemplatesCreateManyProjectInputEnvelopeSchema;
