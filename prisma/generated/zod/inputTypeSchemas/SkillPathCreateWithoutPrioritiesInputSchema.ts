import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema } from './SkillsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema';
import { PersonsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema } from './PersonsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema';
import { SkillPathsToTagsCreateNestedManyWithoutSkillInputSchema } from './SkillPathsToTagsCreateNestedManyWithoutSkillInputSchema';

export const SkillPathCreateWithoutPrioritiesInputSchema: z.ZodType<Prisma.SkillPathCreateWithoutPrioritiesInput> = z.object({
  name: z.string(),
  info: z.string().optional().nullable(),
  skills: z.lazy(() => SkillsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema).optional(),
  students: z.lazy(() => PersonsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema).optional(),
  tags: z.lazy(() => SkillPathsToTagsCreateNestedManyWithoutSkillInputSchema).optional()
}).strict();

export default SkillPathCreateWithoutPrioritiesInputSchema;
