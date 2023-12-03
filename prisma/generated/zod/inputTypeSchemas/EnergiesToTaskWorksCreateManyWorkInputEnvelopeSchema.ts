import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskWorksCreateManyWorkInputSchema } from './EnergiesToTaskWorksCreateManyWorkInputSchema';

export const EnergiesToTaskWorksCreateManyWorkInputEnvelopeSchema: z.ZodType<Prisma.EnergiesToTaskWorksCreateManyWorkInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EnergiesToTaskWorksCreateManyWorkInputSchema),z.lazy(() => EnergiesToTaskWorksCreateManyWorkInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EnergiesToTaskWorksCreateManyWorkInputEnvelopeSchema;
