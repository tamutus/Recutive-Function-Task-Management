import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToSkillsCreateManySkillInputSchema } from './PrivateEnergiesToSkillsCreateManySkillInputSchema';

export const PrivateEnergiesToSkillsCreateManySkillInputEnvelopeSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsCreateManySkillInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrivateEnergiesToSkillsCreateManySkillInputSchema),z.lazy(() => PrivateEnergiesToSkillsCreateManySkillInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrivateEnergiesToSkillsCreateManySkillInputEnvelopeSchema;
