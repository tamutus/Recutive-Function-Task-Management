import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskWorksCreateManyWorkInputSchema } from './PrivateEnergiesToTaskWorksCreateManyWorkInputSchema';

export const PrivateEnergiesToTaskWorksCreateManyWorkInputEnvelopeSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksCreateManyWorkInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksCreateManyWorkInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksCreateManyWorkInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateEnergiesToTaskWorksCreateManyWorkInputEnvelopeSchema;
