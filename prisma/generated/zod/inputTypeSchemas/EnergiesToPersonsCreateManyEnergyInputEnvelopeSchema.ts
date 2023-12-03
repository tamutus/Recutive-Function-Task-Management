import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsCreateManyEnergyInputSchema } from './EnergiesToPersonsCreateManyEnergyInputSchema';

export const EnergiesToPersonsCreateManyEnergyInputEnvelopeSchema: z.ZodType<Prisma.EnergiesToPersonsCreateManyEnergyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EnergiesToPersonsCreateManyEnergyInputSchema),z.lazy(() => EnergiesToPersonsCreateManyEnergyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EnergiesToPersonsCreateManyEnergyInputEnvelopeSchema;
