import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsCreateManyTagInputSchema } from './SkillsToTagsCreateManyTagInputSchema';

export const SkillsToTagsCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.SkillsToTagsCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SkillsToTagsCreateManyTagInputSchema),z.lazy(() => SkillsToTagsCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SkillsToTagsCreateManyTagInputEnvelopeSchema;
