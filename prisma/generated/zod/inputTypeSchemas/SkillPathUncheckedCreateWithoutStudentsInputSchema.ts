import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema } from './SkillsToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema';
import { SkillPathsToTagsUncheckedCreateNestedManyWithoutSkillInputSchema } from './SkillPathsToTagsUncheckedCreateNestedManyWithoutSkillInputSchema';
import { PrioritiesToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema';

export const SkillPathUncheckedCreateWithoutStudentsInputSchema: z.ZodType<Prisma.SkillPathUncheckedCreateWithoutStudentsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  skills: z.lazy(() => SkillsToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema).optional(),
  tags: z.lazy(() => SkillPathsToTagsUncheckedCreateNestedManyWithoutSkillInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema).optional()
}).strict();

export default SkillPathUncheckedCreateWithoutStudentsInputSchema;
