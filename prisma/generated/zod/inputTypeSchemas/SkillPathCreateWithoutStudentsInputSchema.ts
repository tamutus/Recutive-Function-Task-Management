import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema } from './SkillsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema';
import { SkillPathsToTagsCreateNestedManyWithoutSkillInputSchema } from './SkillPathsToTagsCreateNestedManyWithoutSkillInputSchema';
import { PrioritiesToSkillPathsCreateNestedManyWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsCreateNestedManyWithoutSkillPathInputSchema';

export const SkillPathCreateWithoutStudentsInputSchema: z.ZodType<Prisma.SkillPathCreateWithoutStudentsInput> = z.object({
  name: z.string(),
  info: z.string().optional().nullable(),
  skills: z.lazy(() => SkillsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema).optional(),
  tags: z.lazy(() => SkillPathsToTagsCreateNestedManyWithoutSkillInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillPathsCreateNestedManyWithoutSkillPathInputSchema).optional()
}).strict();

export default SkillPathCreateWithoutStudentsInputSchema;
