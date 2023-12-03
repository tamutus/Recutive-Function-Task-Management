import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema } from './PersonsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema';
import { SkillPathsToTagsCreateNestedManyWithoutSkillInputSchema } from './SkillPathsToTagsCreateNestedManyWithoutSkillInputSchema';
import { PrioritiesToSkillPathsCreateNestedManyWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsCreateNestedManyWithoutSkillPathInputSchema';

export const SkillPathCreateWithoutSkillsInputSchema: z.ZodType<Prisma.SkillPathCreateWithoutSkillsInput> = z.object({
  name: z.string(),
  info: z.string().optional().nullable(),
  students: z.lazy(() => PersonsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema).optional(),
  tags: z.lazy(() => SkillPathsToTagsCreateNestedManyWithoutSkillInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillPathsCreateNestedManyWithoutSkillPathInputSchema).optional()
}).strict();

export default SkillPathCreateWithoutSkillsInputSchema;
