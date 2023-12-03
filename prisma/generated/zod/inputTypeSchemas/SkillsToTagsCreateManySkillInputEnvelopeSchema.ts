import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsCreateManySkillInputSchema } from './SkillsToTagsCreateManySkillInputSchema';

export const SkillsToTagsCreateManySkillInputEnvelopeSchema: z.ZodType<Prisma.SkillsToTagsCreateManySkillInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SkillsToTagsCreateManySkillInputSchema),z.lazy(() => SkillsToTagsCreateManySkillInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SkillsToTagsCreateManySkillInputEnvelopeSchema;
