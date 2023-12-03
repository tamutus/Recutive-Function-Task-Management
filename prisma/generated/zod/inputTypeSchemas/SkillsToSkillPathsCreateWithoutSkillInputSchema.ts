import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathCreateNestedOneWithoutSkillsInputSchema } from './SkillPathCreateNestedOneWithoutSkillsInputSchema';

export const SkillsToSkillPathsCreateWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToSkillPathsCreateWithoutSkillInput> = z.object({
  skillPath: z.lazy(() => SkillPathCreateNestedOneWithoutSkillsInputSchema)
}).strict();

export default SkillsToSkillPathsCreateWithoutSkillInputSchema;
