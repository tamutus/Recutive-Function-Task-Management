import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToProjectsCreateManyPriorityInputSchema } from './PrioritiesToProjectsCreateManyPriorityInputSchema';

export const PrioritiesToProjectsCreateManyPriorityInputEnvelopeSchema: z.ZodType<Prisma.PrioritiesToProjectsCreateManyPriorityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrioritiesToProjectsCreateManyPriorityInputSchema),z.lazy(() => PrioritiesToProjectsCreateManyPriorityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrioritiesToProjectsCreateManyPriorityInputEnvelopeSchema;
