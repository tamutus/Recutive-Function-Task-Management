import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToPrivateTagsCreateManyPriorityInputSchema } from './PrioritiesToPrivateTagsCreateManyPriorityInputSchema';

export const PrioritiesToPrivateTagsCreateManyPriorityInputEnvelopeSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsCreateManyPriorityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrioritiesToPrivateTagsCreateManyPriorityInputSchema),z.lazy(() => PrioritiesToPrivateTagsCreateManyPriorityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrioritiesToPrivateTagsCreateManyPriorityInputEnvelopeSchema;
