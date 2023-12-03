import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathUpdateOneRequiredWithoutTagsNestedInputSchema } from './SkillPathUpdateOneRequiredWithoutTagsNestedInputSchema';
import { TagUpdateOneRequiredWithoutPathsNestedInputSchema } from './TagUpdateOneRequiredWithoutPathsNestedInputSchema';
import { PersonUpdateOneRequiredWithoutSkillPathTagsNestedInputSchema } from './PersonUpdateOneRequiredWithoutSkillPathTagsNestedInputSchema';

export const SkillPathsToTagsUpdateInputSchema: z.ZodType<Prisma.SkillPathsToTagsUpdateInput> = z.object({
  skill: z.lazy(() => SkillPathUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutPathsNestedInputSchema).optional(),
  tagger: z.lazy(() => PersonUpdateOneRequiredWithoutSkillPathTagsNestedInputSchema).optional()
}).strict();

export default SkillPathsToTagsUpdateInputSchema;
