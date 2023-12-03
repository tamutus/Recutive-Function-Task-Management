import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToProjectsCreateManyProjectInputSchema } from './PrioritiesToProjectsCreateManyProjectInputSchema';

export const PrioritiesToProjectsCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.PrioritiesToProjectsCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrioritiesToProjectsCreateManyProjectInputSchema),z.lazy(() => PrioritiesToProjectsCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrioritiesToProjectsCreateManyProjectInputEnvelopeSchema;
