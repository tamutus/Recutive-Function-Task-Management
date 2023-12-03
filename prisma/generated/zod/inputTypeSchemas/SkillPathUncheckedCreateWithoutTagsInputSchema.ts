import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema } from './SkillsToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema';
import { PersonsToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema } from './PersonsToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema';
import { PrioritiesToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema';

export const SkillPathUncheckedCreateWithoutTagsInputSchema: z.ZodType<Prisma.SkillPathUncheckedCreateWithoutTagsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  skills: z.lazy(() => SkillsToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema).optional(),
  students: z.lazy(() => PersonsToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema).optional()
}).strict();

export default SkillPathUncheckedCreateWithoutTagsInputSchema;
