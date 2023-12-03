import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToPrivateTagsCreateManyTagInputSchema } from './PrivateEnergiesToPrivateTagsCreateManyTagInputSchema';

export const PrivateEnergiesToPrivateTagsCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsCreateManyTagInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateEnergiesToPrivateTagsCreateManyTagInputEnvelopeSchema;
