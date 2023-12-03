import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsCreateNestedManyWithoutSkillInputSchema } from './SkillsToSkillPathsCreateNestedManyWithoutSkillInputSchema';
import { SkillLinkCreateNestedManyWithoutPrecursorInputSchema } from './SkillLinkCreateNestedManyWithoutPrecursorInputSchema';
import { SkillsToTaskTemplatesCreateNestedManyWithoutSkillInputSchema } from './SkillsToTaskTemplatesCreateNestedManyWithoutSkillInputSchema';
import { SkillsToTasksCreateNestedManyWithoutSkillInputSchema } from './SkillsToTasksCreateNestedManyWithoutSkillInputSchema';
import { PersonsToSkillsCreateNestedManyWithoutSkillInputSchema } from './PersonsToSkillsCreateNestedManyWithoutSkillInputSchema';
import { EnergiesToSkillsCreateNestedManyWithoutSkillInputSchema } from './EnergiesToSkillsCreateNestedManyWithoutSkillInputSchema';
import { PrivateEnergiesToSkillsCreateNestedManyWithoutSkillInputSchema } from './PrivateEnergiesToSkillsCreateNestedManyWithoutSkillInputSchema';
import { PrioritiesToSkillsCreateNestedManyWithoutSkillInputSchema } from './PrioritiesToSkillsCreateNestedManyWithoutSkillInputSchema';
import { SkillsToTagsCreateNestedManyWithoutSkillInputSchema } from './SkillsToTagsCreateNestedManyWithoutSkillInputSchema';

export const SkillCreateWithoutSucceedsInputSchema: z.ZodType<Prisma.SkillCreateWithoutSucceedsInput> = z.object({
  name: z.string(),
  info: z.string().optional().nullable(),
  paths: z.lazy(() => SkillsToSkillPathsCreateNestedManyWithoutSkillInputSchema).optional(),
  precedes: z.lazy(() => SkillLinkCreateNestedManyWithoutPrecursorInputSchema).optional(),
  taskTemplates: z.lazy(() => SkillsToTaskTemplatesCreateNestedManyWithoutSkillInputSchema).optional(),
  tasks: z.lazy(() => SkillsToTasksCreateNestedManyWithoutSkillInputSchema).optional(),
  students: z.lazy(() => PersonsToSkillsCreateNestedManyWithoutSkillInputSchema).optional(),
  energies: z.lazy(() => EnergiesToSkillsCreateNestedManyWithoutSkillInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToSkillsCreateNestedManyWithoutSkillInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillsCreateNestedManyWithoutSkillInputSchema).optional(),
  tags: z.lazy(() => SkillsToTagsCreateNestedManyWithoutSkillInputSchema).optional()
}).strict();

export default SkillCreateWithoutSucceedsInputSchema;
