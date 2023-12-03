import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToSkillsCreateManySkillInputSchema } from './EnergiesToSkillsCreateManySkillInputSchema';

export const EnergiesToSkillsCreateManySkillInputEnvelopeSchema: z.ZodType<Prisma.EnergiesToSkillsCreateManySkillInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EnergiesToSkillsCreateManySkillInputSchema),z.lazy(() => EnergiesToSkillsCreateManySkillInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EnergiesToSkillsCreateManySkillInputEnvelopeSchema;
