import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsCreateManyEnergyInputSchema } from './EnergiesToTagsCreateManyEnergyInputSchema';

export const EnergiesToTagsCreateManyEnergyInputEnvelopeSchema: z.ZodType<Prisma.EnergiesToTagsCreateManyEnergyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EnergiesToTagsCreateManyEnergyInputSchema),z.lazy(() => EnergiesToTagsCreateManyEnergyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EnergiesToTagsCreateManyEnergyInputEnvelopeSchema;
