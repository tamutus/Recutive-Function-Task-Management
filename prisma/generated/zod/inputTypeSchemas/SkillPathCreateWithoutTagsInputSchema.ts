import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema } from './SkillsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema';
import { PersonsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema } from './PersonsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema';
import { PrioritiesToSkillPathsCreateNestedManyWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsCreateNestedManyWithoutSkillPathInputSchema';

export const SkillPathCreateWithoutTagsInputSchema: z.ZodType<Prisma.SkillPathCreateWithoutTagsInput> = z.object({
  name: z.string(),
  info: z.string().optional().nullable(),
  skills: z.lazy(() => SkillsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema).optional(),
  students: z.lazy(() => PersonsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillPathsCreateNestedManyWithoutSkillPathInputSchema).optional()
}).strict();

export default SkillPathCreateWithoutTagsInputSchema;
