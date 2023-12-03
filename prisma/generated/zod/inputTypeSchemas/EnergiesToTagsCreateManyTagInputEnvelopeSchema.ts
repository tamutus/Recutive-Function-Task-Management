import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsCreateManyTagInputSchema } from './EnergiesToTagsCreateManyTagInputSchema';

export const EnergiesToTagsCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.EnergiesToTagsCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EnergiesToTagsCreateManyTagInputSchema),z.lazy(() => EnergiesToTagsCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EnergiesToTagsCreateManyTagInputEnvelopeSchema;
