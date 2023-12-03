import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectsCreateManyTagInputSchema } from './PrivateTagsToProjectsCreateManyTagInputSchema';

export const PrivateTagsToProjectsCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.PrivateTagsToProjectsCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateTagsToProjectsCreateManyTagInputSchema),z.lazy(() => PrivateTagsToProjectsCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateTagsToProjectsCreateManyTagInputEnvelopeSchema;
