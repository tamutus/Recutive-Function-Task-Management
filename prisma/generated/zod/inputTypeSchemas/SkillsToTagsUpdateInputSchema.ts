import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillUpdateOneRequiredWithoutTagsNestedInputSchema } from './SkillUpdateOneRequiredWithoutTagsNestedInputSchema';
import { TagUpdateOneRequiredWithoutSkillsNestedInputSchema } from './TagUpdateOneRequiredWithoutSkillsNestedInputSchema';
import { PersonUpdateOneRequiredWithoutSkillTagsNestedInputSchema } from './PersonUpdateOneRequiredWithoutSkillTagsNestedInputSchema';

export const SkillsToTagsUpdateInputSchema: z.ZodType<Prisma.SkillsToTagsUpdateInput> = z.object({
  skill: z.lazy(() => SkillUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutSkillsNestedInputSchema).optional(),
  tagger: z.lazy(() => PersonUpdateOneRequiredWithoutSkillTagsNestedInputSchema).optional()
}).strict();

export default SkillsToTagsUpdateInputSchema;
