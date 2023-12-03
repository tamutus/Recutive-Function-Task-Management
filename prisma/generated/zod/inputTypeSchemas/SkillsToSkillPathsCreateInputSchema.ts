import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateNestedOneWithoutPathsInputSchema } from './SkillCreateNestedOneWithoutPathsInputSchema';
import { SkillPathCreateNestedOneWithoutSkillsInputSchema } from './SkillPathCreateNestedOneWithoutSkillsInputSchema';

export const SkillsToSkillPathsCreateInputSchema: z.ZodType<Prisma.SkillsToSkillPathsCreateInput> = z.object({
  skill: z.lazy(() => SkillCreateNestedOneWithoutPathsInputSchema),
  skillPath: z.lazy(() => SkillPathCreateNestedOneWithoutSkillsInputSchema)
}).strict();

export default SkillsToSkillPathsCreateInputSchema;
