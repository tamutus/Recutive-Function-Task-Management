import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema } from './SkillsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema';
import { PersonsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema } from './PersonsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema';
import { SkillPathsToTagsCreateNestedManyWithoutSkillInputSchema } from './SkillPathsToTagsCreateNestedManyWithoutSkillInputSchema';
import { PrioritiesToSkillPathsCreateNestedManyWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsCreateNestedManyWithoutSkillPathInputSchema';

export const SkillPathCreateInputSchema: z.ZodType<Prisma.SkillPathCreateInput> = z.object({
  name: z.string(),
  info: z.string().optional().nullable(),
  skills: z.lazy(() => SkillsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema).optional(),
  students: z.lazy(() => PersonsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema).optional(),
  tags: z.lazy(() => SkillPathsToTagsCreateNestedManyWithoutSkillInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillPathsCreateNestedManyWithoutSkillPathInputSchema).optional()
}).strict();

export default SkillPathCreateInputSchema;
