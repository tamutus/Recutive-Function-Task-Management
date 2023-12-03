import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTagsCreateManyEnergyInputSchema } from './PrivateEnergiesToTagsCreateManyEnergyInputSchema';

export const PrivateEnergiesToTagsCreateManyEnergyInputEnvelopeSchema: z.ZodType<Prisma.PrivateEnergiesToTagsCreateManyEnergyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateEnergiesToTagsCreateManyEnergyInputSchema),z.lazy(() => PrivateEnergiesToTagsCreateManyEnergyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateEnergiesToTagsCreateManyEnergyInputEnvelopeSchema;
