import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectsCreateManyProjectInputSchema } from './EnergiesToProjectsCreateManyProjectInputSchema';

export const EnergiesToProjectsCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.EnergiesToProjectsCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EnergiesToProjectsCreateManyProjectInputSchema),z.lazy(() => EnergiesToProjectsCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EnergiesToProjectsCreateManyProjectInputEnvelopeSchema;
