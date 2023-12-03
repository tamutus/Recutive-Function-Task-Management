import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateNestedOneWithoutPathsInputSchema } from './SkillCreateNestedOneWithoutPathsInputSchema';

export const SkillsToSkillPathsCreateWithoutSkillPathInputSchema: z.ZodType<Prisma.SkillsToSkillPathsCreateWithoutSkillPathInput> = z.object({
  skill: z.lazy(() => SkillCreateNestedOneWithoutPathsInputSchema)
}).strict();

export default SkillsToSkillPathsCreateWithoutSkillPathInputSchema;
