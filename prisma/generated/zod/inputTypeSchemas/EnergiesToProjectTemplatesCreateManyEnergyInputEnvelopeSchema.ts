import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesCreateManyEnergyInputSchema } from './EnergiesToProjectTemplatesCreateManyEnergyInputSchema';

export const EnergiesToProjectTemplatesCreateManyEnergyInputEnvelopeSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesCreateManyEnergyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EnergiesToProjectTemplatesCreateManyEnergyInputSchema),z.lazy(() => EnergiesToProjectTemplatesCreateManyEnergyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EnergiesToProjectTemplatesCreateManyEnergyInputEnvelopeSchema;
