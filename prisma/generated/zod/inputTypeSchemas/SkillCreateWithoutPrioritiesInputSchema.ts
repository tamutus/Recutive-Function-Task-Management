import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsCreateNestedManyWithoutSkillInputSchema } from './SkillsToSkillPathsCreateNestedManyWithoutSkillInputSchema';
import { SkillLinkCreateNestedManyWithoutPrecursorInputSchema } from './SkillLinkCreateNestedManyWithoutPrecursorInputSchema';
import { SkillLinkCreateNestedManyWithoutSuccessorInputSchema } from './SkillLinkCreateNestedManyWithoutSuccessorInputSchema';
import { SkillsToTaskTemplatesCreateNestedManyWithoutSkillInputSchema } from './SkillsToTaskTemplatesCreateNestedManyWithoutSkillInputSchema';
import { SkillsToTasksCreateNestedManyWithoutSkillInputSchema } from './SkillsToTasksCreateNestedManyWithoutSkillInputSchema';
import { PersonsToSkillsCreateNestedManyWithoutSkillInputSchema } from './PersonsToSkillsCreateNestedManyWithoutSkillInputSchema';
import { EnergiesToSkillsCreateNestedManyWithoutSkillInputSchema } from './EnergiesToSkillsCreateNestedManyWithoutSkillInputSchema';
import { PrivateEnergiesToSkillsCreateNestedManyWithoutSkillInputSchema } from './PrivateEnergiesToSkillsCreateNestedManyWithoutSkillInputSchema';
import { SkillsToTagsCreateNestedManyWithoutSkillInputSchema } from './SkillsToTagsCreateNestedManyWithoutSkillInputSchema';

export const SkillCreateWithoutPrioritiesInputSchema: z.ZodType<Prisma.SkillCreateWithoutPrioritiesInput> = z.object({
  name: z.string(),
  info: z.string().optional().nullable(),
  paths: z.lazy(() => SkillsToSkillPathsCreateNestedManyWithoutSkillInputSchema).optional(),
  precedes: z.lazy(() => SkillLinkCreateNestedManyWithoutPrecursorInputSchema).optional(),
  succeeds: z.lazy(() => SkillLinkCreateNestedManyWithoutSuccessorInputSchema).optional(),
  taskTemplates: z.lazy(() => SkillsToTaskTemplatesCreateNestedManyWithoutSkillInputSchema).optional(),
  tasks: z.lazy(() => SkillsToTasksCreateNestedManyWithoutSkillInputSchema).optional(),
  students: z.lazy(() => PersonsToSkillsCreateNestedManyWithoutSkillInputSchema).optional(),
  energies: z.lazy(() => EnergiesToSkillsCreateNestedManyWithoutSkillInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToSkillsCreateNestedManyWithoutSkillInputSchema).optional(),
  tags: z.lazy(() => SkillsToTagsCreateNestedManyWithoutSkillInputSchema).optional()
}).strict();

export default SkillCreateWithoutPrioritiesInputSchema;
