import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsCreateManyTaggerInputSchema } from './EnergiesToTagsCreateManyTaggerInputSchema';

export const EnergiesToTagsCreateManyTaggerInputEnvelopeSchema: z.ZodType<Prisma.EnergiesToTagsCreateManyTaggerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EnergiesToTagsCreateManyTaggerInputSchema),z.lazy(() => EnergiesToTagsCreateManyTaggerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EnergiesToTagsCreateManyTaggerInputEnvelopeSchema;
