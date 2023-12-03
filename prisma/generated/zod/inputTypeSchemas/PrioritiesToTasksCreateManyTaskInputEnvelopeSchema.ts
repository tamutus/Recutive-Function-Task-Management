import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTasksCreateManyTaskInputSchema } from './PrioritiesToTasksCreateManyTaskInputSchema';

export const PrioritiesToTasksCreateManyTaskInputEnvelopeSchema: z.ZodType<Prisma.PrioritiesToTasksCreateManyTaskInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrioritiesToTasksCreateManyTaskInputSchema),z.lazy(() => PrioritiesToTasksCreateManyTaskInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrioritiesToTasksCreateManyTaskInputEnvelopeSchema;
