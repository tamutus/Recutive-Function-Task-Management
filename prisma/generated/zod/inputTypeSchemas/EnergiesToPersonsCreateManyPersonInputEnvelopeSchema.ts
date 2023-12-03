import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsCreateManyPersonInputSchema } from './EnergiesToPersonsCreateManyPersonInputSchema';

export const EnergiesToPersonsCreateManyPersonInputEnvelopeSchema: z.ZodType<Prisma.EnergiesToPersonsCreateManyPersonInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EnergiesToPersonsCreateManyPersonInputSchema),z.lazy(() => EnergiesToPersonsCreateManyPersonInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EnergiesToPersonsCreateManyPersonInputEnvelopeSchema;
