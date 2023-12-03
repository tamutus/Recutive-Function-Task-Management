import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTasksCreateManyTagInputSchema } from './PrivateTagsToTasksCreateManyTagInputSchema';

export const PrivateTagsToTasksCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.PrivateTagsToTasksCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateTagsToTasksCreateManyTagInputSchema),z.lazy(() => PrivateTagsToTasksCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateTagsToTasksCreateManyTagInputEnvelopeSchema;
