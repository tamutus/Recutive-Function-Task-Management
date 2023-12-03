import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectTemplatesCreateManyEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesCreateManyEnergyInputSchema';

export const PrivateEnergiesToProjectTemplatesCreateManyEnergyInputEnvelopeSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesCreateManyEnergyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesCreateManyEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesCreateManyEnergyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateEnergiesToProjectTemplatesCreateManyEnergyInputEnvelopeSchema;
