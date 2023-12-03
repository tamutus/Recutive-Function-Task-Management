import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectsCreateManyProjectInputSchema } from './PrivateEnergiesToProjectsCreateManyProjectInputSchema';

export const PrivateEnergiesToProjectsCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateEnergiesToProjectsCreateManyProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectsCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateEnergiesToProjectsCreateManyProjectInputEnvelopeSchema;
