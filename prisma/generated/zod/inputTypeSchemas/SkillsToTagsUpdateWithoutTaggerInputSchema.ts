import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillUpdateOneRequiredWithoutTagsNestedInputSchema } from './SkillUpdateOneRequiredWithoutTagsNestedInputSchema';
import { TagUpdateOneRequiredWithoutSkillsNestedInputSchema } from './TagUpdateOneRequiredWithoutSkillsNestedInputSchema';

export const SkillsToTagsUpdateWithoutTaggerInputSchema: z.ZodType<Prisma.SkillsToTagsUpdateWithoutTaggerInput> = z.object({
  skill: z.lazy(() => SkillUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutSkillsNestedInputSchema).optional()
}).strict();

export default SkillsToTagsUpdateWithoutTaggerInputSchema;
