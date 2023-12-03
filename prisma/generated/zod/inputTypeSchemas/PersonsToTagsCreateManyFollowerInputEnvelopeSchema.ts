import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTagsCreateManyFollowerInputSchema } from './PersonsToTagsCreateManyFollowerInputSchema';

export const PersonsToTagsCreateManyFollowerInputEnvelopeSchema: z.ZodType<Prisma.PersonsToTagsCreateManyFollowerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PersonsToTagsCreateManyFollowerInputSchema),z.lazy(() => PersonsToTagsCreateManyFollowerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PersonsToTagsCreateManyFollowerInputEnvelopeSchema;
