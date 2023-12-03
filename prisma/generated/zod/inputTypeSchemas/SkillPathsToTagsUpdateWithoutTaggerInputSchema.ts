import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathUpdateOneRequiredWithoutTagsNestedInputSchema } from './SkillPathUpdateOneRequiredWithoutTagsNestedInputSchema';
import { TagUpdateOneRequiredWithoutPathsNestedInputSchema } from './TagUpdateOneRequiredWithoutPathsNestedInputSchema';

export const SkillPathsToTagsUpdateWithoutTaggerInputSchema: z.ZodType<Prisma.SkillPathsToTagsUpdateWithoutTaggerInput> = z.object({
  skill: z.lazy(() => SkillPathUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutPathsNestedInputSchema).optional()
}).strict();

export default SkillPathsToTagsUpdateWithoutTaggerInputSchema;
