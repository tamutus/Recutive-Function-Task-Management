import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskTemplatesCreateManyTaskInputSchema } from './PrivateEnergiesToTaskTemplatesCreateManyTaskInputSchema';

export const PrivateEnergiesToTaskTemplatesCreateManyTaskInputEnvelopeSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesCreateManyTaskInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesCreateManyTaskInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesCreateManyTaskInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateEnergiesToTaskTemplatesCreateManyTaskInputEnvelopeSchema;
