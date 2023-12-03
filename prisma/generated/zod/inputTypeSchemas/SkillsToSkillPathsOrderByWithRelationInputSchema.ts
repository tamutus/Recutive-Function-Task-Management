import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SkillOrderByWithRelationInputSchema } from './SkillOrderByWithRelationInputSchema';
import { SkillPathOrderByWithRelationInputSchema } from './SkillPathOrderByWithRelationInputSchema';

export const SkillsToSkillPathsOrderByWithRelationInputSchema: z.ZodType<Prisma.SkillsToSkillPathsOrderByWithRelationInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  skillPathId: z.lazy(() => SortOrderSchema).optional(),
  skill: z.lazy(() => SkillOrderByWithRelationInputSchema).optional(),
  skillPath: z.lazy(() => SkillPathOrderByWithRelationInputSchema).optional()
}).strict();

export default SkillsToSkillPathsOrderByWithRelationInputSchema;
