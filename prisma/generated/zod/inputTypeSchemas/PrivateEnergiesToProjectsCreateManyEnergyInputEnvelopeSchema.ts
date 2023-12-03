import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectsCreateManyEnergyInputSchema } from './PrivateEnergiesToProjectsCreateManyEnergyInputSchema';

export const PrivateEnergiesToProjectsCreateManyEnergyInputEnvelopeSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsCreateManyEnergyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateEnergiesToProjectsCreateManyEnergyInputSchema),z.lazy(() => PrivateEnergiesToProjectsCreateManyEnergyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateEnergiesToProjectsCreateManyEnergyInputEnvelopeSchema;
