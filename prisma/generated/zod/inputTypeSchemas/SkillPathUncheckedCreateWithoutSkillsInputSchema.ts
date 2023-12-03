import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema } from './PersonsToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema';
import { SkillPathsToTagsUncheckedCreateNestedManyWithoutSkillInputSchema } from './SkillPathsToTagsUncheckedCreateNestedManyWithoutSkillInputSchema';
import { PrioritiesToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema';

export const SkillPathUncheckedCreateWithoutSkillsInputSchema: z.ZodType<Prisma.SkillPathUncheckedCreateWithoutSkillsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  students: z.lazy(() => PersonsToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema).optional(),
  tags: z.lazy(() => SkillPathsToTagsUncheckedCreateNestedManyWithoutSkillInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema).optional()
}).strict();

export default SkillPathUncheckedCreateWithoutSkillsInputSchema;
