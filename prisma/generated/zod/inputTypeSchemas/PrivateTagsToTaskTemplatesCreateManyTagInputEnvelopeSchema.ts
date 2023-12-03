import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTaskTemplatesCreateManyTagInputSchema } from './PrivateTagsToTaskTemplatesCreateManyTagInputSchema';

export const PrivateTagsToTaskTemplatesCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesCreateManyTagInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateTagsToTaskTemplatesCreateManyTagInputEnvelopeSchema;
