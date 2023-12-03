import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTasksCreateManyEnergyInputSchema } from './PrivateEnergiesToTasksCreateManyEnergyInputSchema';

export const PrivateEnergiesToTasksCreateManyEnergyInputEnvelopeSchema: z.ZodType<Prisma.PrivateEnergiesToTasksCreateManyEnergyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateEnergiesToTasksCreateManyEnergyInputSchema),z.lazy(() => PrivateEnergiesToTasksCreateManyEnergyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateEnergiesToTasksCreateManyEnergyInputEnvelopeSchema;
