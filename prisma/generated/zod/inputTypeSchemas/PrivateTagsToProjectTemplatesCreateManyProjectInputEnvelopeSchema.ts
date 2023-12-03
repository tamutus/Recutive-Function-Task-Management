import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectTemplatesCreateManyProjectInputSchema } from './PrivateTagsToProjectTemplatesCreateManyProjectInputSchema';

export const PrivateTagsToProjectTemplatesCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesCreateManyProjectInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateTagsToProjectTemplatesCreateManyProjectInputEnvelopeSchema;
