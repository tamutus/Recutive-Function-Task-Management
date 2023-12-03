import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToSkillsCreateManyEnergyInputSchema } from './PrivateEnergiesToSkillsCreateManyEnergyInputSchema';

export const PrivateEnergiesToSkillsCreateManyEnergyInputEnvelopeSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsCreateManyEnergyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateEnergiesToSkillsCreateManyEnergyInputSchema),z.lazy(() => PrivateEnergiesToSkillsCreateManyEnergyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateEnergiesToSkillsCreateManyEnergyInputEnvelopeSchema;
