import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskTemplatesCreateManyEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesCreateManyEnergyInputSchema';

export const PrivateEnergiesToTaskTemplatesCreateManyEnergyInputEnvelopeSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesCreateManyEnergyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesCreateManyEnergyInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesCreateManyEnergyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateEnergiesToTaskTemplatesCreateManyEnergyInputEnvelopeSchema;
