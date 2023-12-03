import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillUpdateOneRequiredWithoutPathsNestedInputSchema } from './SkillUpdateOneRequiredWithoutPathsNestedInputSchema';
import { SkillPathUpdateOneRequiredWithoutSkillsNestedInputSchema } from './SkillPathUpdateOneRequiredWithoutSkillsNestedInputSchema';

export const SkillsToSkillPathsUpdateInputSchema: z.ZodType<Prisma.SkillsToSkillPathsUpdateInput> = z.object({
  skill: z.lazy(() => SkillUpdateOneRequiredWithoutPathsNestedInputSchema).optional(),
  skillPath: z.lazy(() => SkillPathUpdateOneRequiredWithoutSkillsNestedInputSchema).optional()
}).strict();

export default SkillsToSkillPathsUpdateInputSchema;
