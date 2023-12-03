import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTasksCreateManyTaskInputSchema } from './EnergiesToTasksCreateManyTaskInputSchema';

export const EnergiesToTasksCreateManyTaskInputEnvelopeSchema: z.ZodType<Prisma.EnergiesToTasksCreateManyTaskInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EnergiesToTasksCreateManyTaskInputSchema),z.lazy(() => EnergiesToTasksCreateManyTaskInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EnergiesToTasksCreateManyTaskInputEnvelopeSchema;
