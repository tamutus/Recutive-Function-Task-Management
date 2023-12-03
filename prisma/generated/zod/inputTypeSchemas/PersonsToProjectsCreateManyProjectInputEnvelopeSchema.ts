import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectsCreateManyProjectInputSchema } from './PersonsToProjectsCreateManyProjectInputSchema';

export const PersonsToProjectsCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.PersonsToProjectsCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PersonsToProjectsCreateManyProjectInputSchema),z.lazy(() => PersonsToProjectsCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PersonsToProjectsCreateManyProjectInputEnvelopeSchema;
