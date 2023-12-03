import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagUpdateOneRequiredWithoutPathsNestedInputSchema } from './TagUpdateOneRequiredWithoutPathsNestedInputSchema';
import { PersonUpdateOneRequiredWithoutSkillPathTagsNestedInputSchema } from './PersonUpdateOneRequiredWithoutSkillPathTagsNestedInputSchema';

export const SkillPathsToTagsUpdateWithoutSkillInputSchema: z.ZodType<Prisma.SkillPathsToTagsUpdateWithoutSkillInput> = z.object({
  tag: z.lazy(() => TagUpdateOneRequiredWithoutPathsNestedInputSchema).optional(),
  tagger: z.lazy(() => PersonUpdateOneRequiredWithoutSkillPathTagsNestedInputSchema).optional()
}).strict();

export default SkillPathsToTagsUpdateWithoutSkillInputSchema;
