import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPrivateTagsCreateManyEnergyInputSchema } from './EnergiesToPrivateTagsCreateManyEnergyInputSchema';

export const EnergiesToPrivateTagsCreateManyEnergyInputEnvelopeSchema: z.ZodType<Prisma.EnergiesToPrivateTagsCreateManyEnergyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EnergiesToPrivateTagsCreateManyEnergyInputSchema),z.lazy(() => EnergiesToPrivateTagsCreateManyEnergyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EnergiesToPrivateTagsCreateManyEnergyInputEnvelopeSchema;
