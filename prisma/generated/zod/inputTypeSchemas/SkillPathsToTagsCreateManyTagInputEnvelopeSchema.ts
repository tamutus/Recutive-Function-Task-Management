import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsCreateManyTagInputSchema } from './SkillPathsToTagsCreateManyTagInputSchema';

export const SkillPathsToTagsCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.SkillPathsToTagsCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SkillPathsToTagsCreateManyTagInputSchema),z.lazy(() => SkillPathsToTagsCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SkillPathsToTagsCreateManyTagInputEnvelopeSchema;
