import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToSkillsCreateManyEnergyInputSchema } from './EnergiesToSkillsCreateManyEnergyInputSchema';

export const EnergiesToSkillsCreateManyEnergyInputEnvelopeSchema: z.ZodType<Prisma.EnergiesToSkillsCreateManyEnergyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EnergiesToSkillsCreateManyEnergyInputSchema),z.lazy(() => EnergiesToSkillsCreateManyEnergyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EnergiesToSkillsCreateManyEnergyInputEnvelopeSchema;
