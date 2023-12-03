import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTasksCreateManyPriorityInputSchema } from './PrioritiesToTasksCreateManyPriorityInputSchema';

export const PrioritiesToTasksCreateManyPriorityInputEnvelopeSchema: z.ZodType<Prisma.PrioritiesToTasksCreateManyPriorityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrioritiesToTasksCreateManyPriorityInputSchema),z.lazy(() => PrioritiesToTasksCreateManyPriorityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrioritiesToTasksCreateManyPriorityInputEnvelopeSchema;
