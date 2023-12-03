import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathUpdateOneRequiredWithoutSkillsNestedInputSchema } from './SkillPathUpdateOneRequiredWithoutSkillsNestedInputSchema';

export const SkillsToSkillPathsUpdateWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToSkillPathsUpdateWithoutSkillInput> = z.object({
  skillPath: z.lazy(() => SkillPathUpdateOneRequiredWithoutSkillsNestedInputSchema).optional()
}).strict();

export default SkillsToSkillPathsUpdateWithoutSkillInputSchema;
