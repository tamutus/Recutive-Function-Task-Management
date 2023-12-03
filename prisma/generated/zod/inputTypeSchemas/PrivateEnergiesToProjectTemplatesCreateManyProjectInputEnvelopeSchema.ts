import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectTemplatesCreateManyProjectInputSchema } from './PrivateEnergiesToProjectTemplatesCreateManyProjectInputSchema';

export const PrivateEnergiesToProjectTemplatesCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesCreateManyProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateEnergiesToProjectTemplatesCreateManyProjectInputEnvelopeSchema;
