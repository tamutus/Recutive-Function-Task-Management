import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillsCreateManyPriorityInputSchema } from './PrioritiesToSkillsCreateManyPriorityInputSchema';

export const PrioritiesToSkillsCreateManyPriorityInputEnvelopeSchema: z.ZodType<Prisma.PrioritiesToSkillsCreateManyPriorityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrioritiesToSkillsCreateManyPriorityInputSchema),z.lazy(() => PrioritiesToSkillsCreateManyPriorityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrioritiesToSkillsCreateManyPriorityInputEnvelopeSchema;
