import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTaskTemplatesCreateManyPersonInputSchema } from './PersonsToTaskTemplatesCreateManyPersonInputSchema';

export const PersonsToTaskTemplatesCreateManyPersonInputEnvelopeSchema: z.ZodType<Prisma.PersonsToTaskTemplatesCreateManyPersonInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PersonsToTaskTemplatesCreateManyPersonInputSchema),z.lazy(() => PersonsToTaskTemplatesCreateManyPersonInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PersonsToTaskTemplatesCreateManyPersonInputEnvelopeSchema;
