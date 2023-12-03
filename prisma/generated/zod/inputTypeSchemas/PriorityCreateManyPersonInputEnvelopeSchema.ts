import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateManyPersonInputSchema } from './PriorityCreateManyPersonInputSchema';

export const PriorityCreateManyPersonInputEnvelopeSchema: z.ZodType<Prisma.PriorityCreateManyPersonInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PriorityCreateManyPersonInputSchema),z.lazy(() => PriorityCreateManyPersonInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PriorityCreateManyPersonInputEnvelopeSchema;
