import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SkillPathOrderByWithRelationInputSchema } from './SkillPathOrderByWithRelationInputSchema';
import { TagOrderByWithRelationInputSchema } from './TagOrderByWithRelationInputSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';

export const SkillPathsToTagsOrderByWithRelationInputSchema: z.ZodType<Prisma.SkillPathsToTagsOrderByWithRelationInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  taggerId: z.lazy(() => SortOrderSchema).optional(),
  skill: z.lazy(() => SkillPathOrderByWithRelationInputSchema).optional(),
  tag: z.lazy(() => TagOrderByWithRelationInputSchema).optional(),
  tagger: z.lazy(() => PersonOrderByWithRelationInputSchema).optional()
}).strict();

export default SkillPathsToTagsOrderByWithRelationInputSchema;
