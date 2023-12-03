import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPrivateTagsCreateManyTagInputSchema } from './EnergiesToPrivateTagsCreateManyTagInputSchema';

export const EnergiesToPrivateTagsCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.EnergiesToPrivateTagsCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EnergiesToPrivateTagsCreateManyTagInputSchema),z.lazy(() => EnergiesToPrivateTagsCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EnergiesToPrivateTagsCreateManyTagInputEnvelopeSchema;
