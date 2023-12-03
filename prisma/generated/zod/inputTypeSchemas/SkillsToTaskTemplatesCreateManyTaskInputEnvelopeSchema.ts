import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTaskTemplatesCreateManyTaskInputSchema } from './SkillsToTaskTemplatesCreateManyTaskInputSchema';

export const SkillsToTaskTemplatesCreateManyTaskInputEnvelopeSchema: z.ZodType<Prisma.SkillsToTaskTemplatesCreateManyTaskInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SkillsToTaskTemplatesCreateManyTaskInputSchema),z.lazy(() => SkillsToTaskTemplatesCreateManyTaskInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SkillsToTaskTemplatesCreateManyTaskInputEnvelopeSchema;
