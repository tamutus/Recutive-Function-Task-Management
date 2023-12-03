import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskWorksCreateManyEnergyInputSchema } from './PrivateEnergiesToTaskWorksCreateManyEnergyInputSchema';

export const PrivateEnergiesToTaskWorksCreateManyEnergyInputEnvelopeSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksCreateManyEnergyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksCreateManyEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksCreateManyEnergyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateEnergiesToTaskWorksCreateManyEnergyInputEnvelopeSchema;
