import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTaskTemplatesCreateManyTaskInputSchema } from './PersonsToTaskTemplatesCreateManyTaskInputSchema';

export const PersonsToTaskTemplatesCreateManyTaskInputEnvelopeSchema: z.ZodType<Prisma.PersonsToTaskTemplatesCreateManyTaskInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PersonsToTaskTemplatesCreateManyTaskInputSchema),z.lazy(() => PersonsToTaskTemplatesCreateManyTaskInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PersonsToTaskTemplatesCreateManyTaskInputEnvelopeSchema;
