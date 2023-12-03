import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectTemplatesCreateManyPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesCreateManyPrivateTagInputSchema';

export const PrivateTagsToProjectTemplatesCreateManyPrivateTagInputEnvelopeSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesCreateManyPrivateTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesCreateManyPrivateTagInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesCreateManyPrivateTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateTagsToProjectTemplatesCreateManyPrivateTagInputEnvelopeSchema;
