import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToPrivateTagsCreateManyEnergyInputSchema } from './PrivateEnergiesToPrivateTagsCreateManyEnergyInputSchema';

export const PrivateEnergiesToPrivateTagsCreateManyEnergyInputEnvelopeSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsCreateManyEnergyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsCreateManyEnergyInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsCreateManyEnergyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateEnergiesToPrivateTagsCreateManyEnergyInputEnvelopeSchema;
