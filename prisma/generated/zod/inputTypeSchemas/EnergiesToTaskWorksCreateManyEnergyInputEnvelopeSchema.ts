import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskWorksCreateManyEnergyInputSchema } from './EnergiesToTaskWorksCreateManyEnergyInputSchema';

export const EnergiesToTaskWorksCreateManyEnergyInputEnvelopeSchema: z.ZodType<Prisma.EnergiesToTaskWorksCreateManyEnergyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EnergiesToTaskWorksCreateManyEnergyInputSchema),z.lazy(() => EnergiesToTaskWorksCreateManyEnergyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EnergiesToTaskWorksCreateManyEnergyInputEnvelopeSchema;
