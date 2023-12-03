import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTagsCreateManyPriorityInputSchema } from './PrioritiesToTagsCreateManyPriorityInputSchema';

export const PrioritiesToTagsCreateManyPriorityInputEnvelopeSchema: z.ZodType<Prisma.PrioritiesToTagsCreateManyPriorityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrioritiesToTagsCreateManyPriorityInputSchema),z.lazy(() => PrioritiesToTagsCreateManyPriorityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrioritiesToTagsCreateManyPriorityInputEnvelopeSchema;
