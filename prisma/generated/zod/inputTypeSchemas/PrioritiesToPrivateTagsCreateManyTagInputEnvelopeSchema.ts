import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToPrivateTagsCreateManyTagInputSchema } from './PrioritiesToPrivateTagsCreateManyTagInputSchema';

export const PrioritiesToPrivateTagsCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrioritiesToPrivateTagsCreateManyTagInputSchema),z.lazy(() => PrioritiesToPrivateTagsCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrioritiesToPrivateTagsCreateManyTagInputEnvelopeSchema;
