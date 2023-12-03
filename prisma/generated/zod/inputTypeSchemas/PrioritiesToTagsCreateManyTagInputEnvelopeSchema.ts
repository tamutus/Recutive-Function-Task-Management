import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTagsCreateManyTagInputSchema } from './PrioritiesToTagsCreateManyTagInputSchema';

export const PrioritiesToTagsCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.PrioritiesToTagsCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrioritiesToTagsCreateManyTagInputSchema),z.lazy(() => PrioritiesToTagsCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrioritiesToTagsCreateManyTagInputEnvelopeSchema;
