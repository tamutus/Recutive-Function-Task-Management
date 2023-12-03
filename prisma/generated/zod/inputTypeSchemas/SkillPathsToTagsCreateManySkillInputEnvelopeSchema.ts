import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsCreateManySkillInputSchema } from './SkillPathsToTagsCreateManySkillInputSchema';

export const SkillPathsToTagsCreateManySkillInputEnvelopeSchema: z.ZodType<Prisma.SkillPathsToTagsCreateManySkillInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SkillPathsToTagsCreateManySkillInputSchema),z.lazy(() => SkillPathsToTagsCreateManySkillInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SkillPathsToTagsCreateManySkillInputEnvelopeSchema;
