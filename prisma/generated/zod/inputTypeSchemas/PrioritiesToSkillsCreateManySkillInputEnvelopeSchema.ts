import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillsCreateManySkillInputSchema } from './PrioritiesToSkillsCreateManySkillInputSchema';

export const PrioritiesToSkillsCreateManySkillInputEnvelopeSchema: z.ZodType<Prisma.PrioritiesToSkillsCreateManySkillInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrioritiesToSkillsCreateManySkillInputSchema),z.lazy(() => PrioritiesToSkillsCreateManySkillInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrioritiesToSkillsCreateManySkillInputEnvelopeSchema;
