import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsCreateNestedManyWithoutSkillInputSchema } from './SkillsToSkillPathsCreateNestedManyWithoutSkillInputSchema';
import { SkillLinkCreateNestedManyWithoutPrecursorInputSchema } from './SkillLinkCreateNestedManyWithoutPrecursorInputSchema';
import { SkillLinkCreateNestedManyWithoutSuccessorInputSchema } from './SkillLinkCreateNestedManyWithoutSuccessorInputSchema';
import { SkillsToTaskTemplatesCreateNestedManyWithoutSkillInputSchema } from './SkillsToTaskTemplatesCreateNestedManyWithoutSkillInputSchema';
import { SkillsToTasksCreateNestedManyWithoutSkillInputSchema } from './SkillsToTasksCreateNestedManyWithoutSkillInputSchema';
import { PersonsToSkillsCreateNestedManyWithoutSkillInputSchema } from './PersonsToSkillsCreateNestedManyWithoutSkillInputSchema';
import { PrivateEnergiesToSkillsCreateNestedManyWithoutSkillInputSchema } from './PrivateEnergiesToSkillsCreateNestedManyWithoutSkillInputSchema';
import { PrioritiesToSkillsCreateNestedManyWithoutSkillInputSchema } from './PrioritiesToSkillsCreateNestedManyWithoutSkillInputSchema';
import { SkillsToTagsCreateNestedManyWithoutSkillInputSchema } from './SkillsToTagsCreateNestedManyWithoutSkillInputSchema';

export const SkillCreateWithoutEnergiesInputSchema: z.ZodType<Prisma.SkillCreateWithoutEnergiesInput> = z.object({
  name: z.string(),
  info: z.string().optional().nullable(),
  paths: z.lazy(() => SkillsToSkillPathsCreateNestedManyWithoutSkillInputSchema).optional(),
  precedes: z.lazy(() => SkillLinkCreateNestedManyWithoutPrecursorInputSchema).optional(),
  succeeds: z.lazy(() => SkillLinkCreateNestedManyWithoutSuccessorInputSchema).optional(),
  taskTemplates: z.lazy(() => SkillsToTaskTemplatesCreateNestedManyWithoutSkillInputSchema).optional(),
  tasks: z.lazy(() => SkillsToTasksCreateNestedManyWithoutSkillInputSchema).optional(),
  students: z.lazy(() => PersonsToSkillsCreateNestedManyWithoutSkillInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToSkillsCreateNestedManyWithoutSkillInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillsCreateNestedManyWithoutSkillInputSchema).optional(),
  tags: z.lazy(() => SkillsToTagsCreateNestedManyWithoutSkillInputSchema).optional()
}).strict();

export default SkillCreateWithoutEnergiesInputSchema;