import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTaskTemplatesCreateManyTaskInputSchema } from './PrivateTagsToTaskTemplatesCreateManyTaskInputSchema';

export const PrivateTagsToTaskTemplatesCreateManyTaskInputEnvelopeSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesCreateManyTaskInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesCreateManyTaskInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesCreateManyTaskInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateTagsToTaskTemplatesCreateManyTaskInputEnvelopeSchema;
