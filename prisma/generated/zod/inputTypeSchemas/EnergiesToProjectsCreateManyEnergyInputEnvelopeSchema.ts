import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectsCreateManyEnergyInputSchema } from './EnergiesToProjectsCreateManyEnergyInputSchema';

export const EnergiesToProjectsCreateManyEnergyInputEnvelopeSchema: z.ZodType<Prisma.EnergiesToProjectsCreateManyEnergyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EnergiesToProjectsCreateManyEnergyInputSchema),z.lazy(() => EnergiesToProjectsCreateManyEnergyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EnergiesToProjectsCreateManyEnergyInputEnvelopeSchema;
