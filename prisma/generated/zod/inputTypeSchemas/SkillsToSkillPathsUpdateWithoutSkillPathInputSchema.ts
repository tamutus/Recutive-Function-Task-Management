import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillUpdateOneRequiredWithoutPathsNestedInputSchema } from './SkillUpdateOneRequiredWithoutPathsNestedInputSchema';

export const SkillsToSkillPathsUpdateWithoutSkillPathInputSchema: z.ZodType<Prisma.SkillsToSkillPathsUpdateWithoutSkillPathInput> = z.object({
  skill: z.lazy(() => SkillUpdateOneRequiredWithoutPathsNestedInputSchema).optional()
}).strict();

export default SkillsToSkillPathsUpdateWithoutSkillPathInputSchema;
