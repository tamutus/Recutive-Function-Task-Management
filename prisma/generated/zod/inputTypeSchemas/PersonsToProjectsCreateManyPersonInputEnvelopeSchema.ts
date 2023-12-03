import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectsCreateManyPersonInputSchema } from './PersonsToProjectsCreateManyPersonInputSchema';

export const PersonsToProjectsCreateManyPersonInputEnvelopeSchema: z.ZodType<Prisma.PersonsToProjectsCreateManyPersonInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PersonsToProjectsCreateManyPersonInputSchema),z.lazy(() => PersonsToProjectsCreateManyPersonInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PersonsToProjectsCreateManyPersonInputEnvelopeSchema;
