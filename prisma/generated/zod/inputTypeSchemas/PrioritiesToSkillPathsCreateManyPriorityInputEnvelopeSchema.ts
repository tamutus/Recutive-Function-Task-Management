import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillPathsCreateManyPriorityInputSchema } from './PrioritiesToSkillPathsCreateManyPriorityInputSchema';

export const PrioritiesToSkillPathsCreateManyPriorityInputEnvelopeSchema: z.ZodType<Prisma.PrioritiesToSkillPathsCreateManyPriorityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrioritiesToSkillPathsCreateManyPriorityInputSchema),z.lazy(() => PrioritiesToSkillPathsCreateManyPriorityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PrioritiesToSkillPathsCreateManyPriorityInputEnvelopeSchema;
