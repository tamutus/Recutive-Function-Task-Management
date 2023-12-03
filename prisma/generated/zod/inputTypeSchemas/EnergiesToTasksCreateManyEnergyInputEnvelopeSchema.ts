import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTasksCreateManyEnergyInputSchema } from './EnergiesToTasksCreateManyEnergyInputSchema';

export const EnergiesToTasksCreateManyEnergyInputEnvelopeSchema: z.ZodType<Prisma.EnergiesToTasksCreateManyEnergyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EnergiesToTasksCreateManyEnergyInputSchema),z.lazy(() => EnergiesToTasksCreateManyEnergyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EnergiesToTasksCreateManyEnergyInputEnvelopeSchema;
