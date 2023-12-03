import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTasksCreateManySkillInputSchema } from './SkillsToTasksCreateManySkillInputSchema';

export const SkillsToTasksCreateManySkillInputEnvelopeSchema: z.ZodType<Prisma.SkillsToTasksCreateManySkillInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SkillsToTasksCreateManySkillInputSchema),z.lazy(() => SkillsToTasksCreateManySkillInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SkillsToTasksCreateManySkillInputEnvelopeSchema;
