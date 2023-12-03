import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTaskTemplatesCreateManySkillInputSchema } from './SkillsToTaskTemplatesCreateManySkillInputSchema';

export const SkillsToTaskTemplatesCreateManySkillInputEnvelopeSchema: z.ZodType<Prisma.SkillsToTaskTemplatesCreateManySkillInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SkillsToTaskTemplatesCreateManySkillInputSchema),z.lazy(() => SkillsToTaskTemplatesCreateManySkillInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SkillsToTaskTemplatesCreateManySkillInputEnvelopeSchema;
