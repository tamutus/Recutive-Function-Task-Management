import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectsCreateManyProjectInputSchema } from './PrivateTagsToProjectsCreateManyProjectInputSchema';

export const PrivateTagsToProjectsCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.PrivateTagsToProjectsCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateTagsToProjectsCreateManyProjectInputSchema),z.lazy(() => PrivateTagsToProjectsCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateTagsToProjectsCreateManyProjectInputEnvelopeSchema;
