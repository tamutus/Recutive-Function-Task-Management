import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsUncheckedCreateNestedManyWithoutSkillInputSchema } from './SkillsToSkillPathsUncheckedCreateNestedManyWithoutSkillInputSchema';
import { SkillLinkUncheckedCreateNestedManyWithoutPrecursorInputSchema } from './SkillLinkUncheckedCreateNestedManyWithoutPrecursorInputSchema';
import { SkillLinkUncheckedCreateNestedManyWithoutSuccessorInputSchema } from './SkillLinkUncheckedCreateNestedManyWithoutSuccessorInputSchema';
import { SkillsToTasksUncheckedCreateNestedManyWithoutSkillInputSchema } from './SkillsToTasksUncheckedCreateNestedManyWithoutSkillInputSchema';
import { PersonsToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema } from './PersonsToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema';
import { EnergiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema } from './EnergiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema';
import { PrivateEnergiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema } from './PrivateEnergiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema';
import { PrioritiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema } from './PrioritiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema';
import { SkillsToTagsUncheckedCreateNestedManyWithoutSkillInputSchema } from './SkillsToTagsUncheckedCreateNestedManyWithoutSkillInputSchema';

export const SkillUncheckedCreateWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.SkillUncheckedCreateWithoutTaskTemplatesInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  paths: z.lazy(() => SkillsToSkillPathsUncheckedCreateNestedManyWithoutSkillInputSchema).optional(),
  precedes: z.lazy(() => SkillLinkUncheckedCreateNestedManyWithoutPrecursorInputSchema).optional(),
  succeeds: z.lazy(() => SkillLinkUncheckedCreateNestedManyWithoutSuccessorInputSchema).optional(),
  tasks: z.lazy(() => SkillsToTasksUncheckedCreateNestedManyWithoutSkillInputSchema).optional(),
  students: z.lazy(() => PersonsToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema).optional(),
  energies: z.lazy(() => EnergiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema).optional(),
  tags: z.lazy(() => SkillsToTagsUncheckedCreateNestedManyWithoutSkillInputSchema).optional()
}).strict();

export default SkillUncheckedCreateWithoutTaskTemplatesInputSchema;
