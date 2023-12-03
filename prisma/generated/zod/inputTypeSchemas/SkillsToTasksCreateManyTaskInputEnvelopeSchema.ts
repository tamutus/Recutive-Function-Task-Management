import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTasksCreateManyTaskInputSchema } from './SkillsToTasksCreateManyTaskInputSchema';

export const SkillsToTasksCreateManyTaskInputEnvelopeSchema: z.ZodType<Prisma.SkillsToTasksCreateManyTaskInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SkillsToTasksCreateManyTaskInputSchema),z.lazy(() => SkillsToTasksCreateManyTaskInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SkillsToTasksCreateManyTaskInputEnvelopeSchema;
