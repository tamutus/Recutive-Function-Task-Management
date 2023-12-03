import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateManyPersonInputSchema } from './PrivateTagCreateManyPersonInputSchema';

export const PrivateTagCreateManyPersonInputEnvelopeSchema: z.ZodType<Prisma.PrivateTagCreateManyPersonInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateTagCreateManyPersonInputSchema),z.lazy(() => PrivateTagCreateManyPersonInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateTagCreateManyPersonInputEnvelopeSchema;
