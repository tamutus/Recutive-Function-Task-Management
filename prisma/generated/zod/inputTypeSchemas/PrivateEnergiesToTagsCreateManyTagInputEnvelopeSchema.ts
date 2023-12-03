import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTagsCreateManyTagInputSchema } from './PrivateEnergiesToTagsCreateManyTagInputSchema';

export const PrivateEnergiesToTagsCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.PrivateEnergiesToTagsCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateEnergiesToTagsCreateManyTagInputSchema),z.lazy(() => PrivateEnergiesToTagsCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateEnergiesToTagsCreateManyTagInputEnvelopeSchema;
