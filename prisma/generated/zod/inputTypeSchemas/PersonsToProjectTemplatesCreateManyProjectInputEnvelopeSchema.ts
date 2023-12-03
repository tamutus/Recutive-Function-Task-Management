import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectTemplatesCreateManyProjectInputSchema } from './PersonsToProjectTemplatesCreateManyProjectInputSchema';

export const PersonsToProjectTemplatesCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.PersonsToProjectTemplatesCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PersonsToProjectTemplatesCreateManyProjectInputSchema),z.lazy(() => PersonsToProjectTemplatesCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PersonsToProjectTemplatesCreateManyProjectInputEnvelopeSchema;
