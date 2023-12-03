import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsCreateManyTaggerInputSchema } from './SkillPathsToTagsCreateManyTaggerInputSchema';

export const SkillPathsToTagsCreateManyTaggerInputEnvelopeSchema: z.ZodType<Prisma.SkillPathsToTagsCreateManyTaggerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SkillPathsToTagsCreateManyTaggerInputSchema),z.lazy(() => SkillPathsToTagsCreateManyTaggerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SkillPathsToTagsCreateManyTaggerInputEnvelopeSchema;
