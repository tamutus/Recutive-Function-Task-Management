import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsCreateManyTaggerInputSchema } from './SkillsToTagsCreateManyTaggerInputSchema';

export const SkillsToTagsCreateManyTaggerInputEnvelopeSchema: z.ZodType<Prisma.SkillsToTagsCreateManyTaggerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SkillsToTagsCreateManyTaggerInputSchema),z.lazy(() => SkillsToTagsCreateManyTaggerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SkillsToTagsCreateManyTaggerInputEnvelopeSchema;
