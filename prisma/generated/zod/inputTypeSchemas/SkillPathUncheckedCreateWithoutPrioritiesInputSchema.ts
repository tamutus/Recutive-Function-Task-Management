import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema } from './SkillsToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema';
import { PersonsToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema } from './PersonsToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema';
import { SkillPathsToTagsUncheckedCreateNestedManyWithoutSkillInputSchema } from './SkillPathsToTagsUncheckedCreateNestedManyWithoutSkillInputSchema';

export const SkillPathUncheckedCreateWithoutPrioritiesInputSchema: z.ZodType<Prisma.SkillPathUncheckedCreateWithoutPrioritiesInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  skills: z.lazy(() => SkillsToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema).optional(),
  students: z.lazy(() => PersonsToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema).optional(),
  tags: z.lazy(() => SkillPathsToTagsUncheckedCreateNestedManyWithoutSkillInputSchema).optional()
}).strict();

export default SkillPathUncheckedCreateWithoutPrioritiesInputSchema;
