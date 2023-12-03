import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesCreateManyEnergyInputSchema } from './EnergiesToTaskTemplatesCreateManyEnergyInputSchema';

export const EnergiesToTaskTemplatesCreateManyEnergyInputEnvelopeSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesCreateManyEnergyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EnergiesToTaskTemplatesCreateManyEnergyInputSchema),z.lazy(() => EnergiesToTaskTemplatesCreateManyEnergyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EnergiesToTaskTemplatesCreateManyEnergyInputEnvelopeSchema;
