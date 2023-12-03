import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SkillOrderByWithRelationInputSchema } from './SkillOrderByWithRelationInputSchema';
import { TagOrderByWithRelationInputSchema } from './TagOrderByWithRelationInputSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';

export const SkillsToTagsOrderByWithRelationInputSchema: z.ZodType<Prisma.SkillsToTagsOrderByWithRelationInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taggerId: z.lazy(() => SortOrderSchema).optional(),
  skill: z.lazy(() => SkillOrderByWithRelationInputSchema).optional(),
  tag: z.lazy(() => TagOrderByWithRelationInputSchema).optional(),
  tagger: z.lazy(() => PersonOrderByWithRelationInputSchema).optional()
}).strict();

export default SkillsToTagsOrderByWithRelationInputSchema;
