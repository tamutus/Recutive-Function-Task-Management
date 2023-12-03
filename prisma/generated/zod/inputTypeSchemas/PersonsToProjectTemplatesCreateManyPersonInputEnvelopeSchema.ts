import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectTemplatesCreateManyPersonInputSchema } from './PersonsToProjectTemplatesCreateManyPersonInputSchema';

export const PersonsToProjectTemplatesCreateManyPersonInputEnvelopeSchema: z.ZodType<Prisma.PersonsToProjectTemplatesCreateManyPersonInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PersonsToProjectTemplatesCreateManyPersonInputSchema),z.lazy(() => PersonsToProjectTemplatesCreateManyPersonInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PersonsToProjectTemplatesCreateManyPersonInputEnvelopeSchema;
