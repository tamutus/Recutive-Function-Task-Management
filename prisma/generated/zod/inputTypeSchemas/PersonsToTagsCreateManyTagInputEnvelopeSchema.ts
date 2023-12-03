import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTagsCreateManyTagInputSchema } from './PersonsToTagsCreateManyTagInputSchema';

export const PersonsToTagsCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.PersonsToTagsCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PersonsToTagsCreateManyTagInputSchema),z.lazy(() => PersonsToTagsCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PersonsToTagsCreateManyTagInputEnvelopeSchema;
