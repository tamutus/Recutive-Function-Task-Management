import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateManyPersonInputSchema } from './PrivateEnergyCreateManyPersonInputSchema';

export const PrivateEnergyCreateManyPersonInputEnvelopeSchema: z.ZodType<Prisma.PrivateEnergyCreateManyPersonInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateEnergyCreateManyPersonInputSchema),z.lazy(() => PrivateEnergyCreateManyPersonInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateEnergyCreateManyPersonInputEnvelopeSchema;
