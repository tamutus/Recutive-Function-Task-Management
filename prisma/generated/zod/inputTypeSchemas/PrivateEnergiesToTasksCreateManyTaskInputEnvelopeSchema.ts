import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTasksCreateManyTaskInputSchema } from './PrivateEnergiesToTasksCreateManyTaskInputSchema';

export const PrivateEnergiesToTasksCreateManyTaskInputEnvelopeSchema: z.ZodType<Prisma.PrivateEnergiesToTasksCreateManyTaskInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateEnergiesToTasksCreateManyTaskInputSchema),z.lazy(() => PrivateEnergiesToTasksCreateManyTaskInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateEnergiesToTasksCreateManyTaskInputEnvelopeSchema;
