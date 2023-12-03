import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsUncheckedCreateNestedManyWithoutSkillInputSchema } from './SkillsToSkillPathsUncheckedCreateNestedManyWithoutSkillInputSchema';
import { SkillLinkUncheckedCreateNestedManyWithoutSuccessorInputSchema } from './SkillLinkUncheckedCreateNestedManyWithoutSuccessorInputSchema';
import { SkillsToTaskTemplatesUncheckedCreateNestedManyWithoutSkillInputSchema } from './SkillsToTaskTemplatesUncheckedCreateNestedManyWithoutSkillInputSchema';
import { SkillsToTasksUncheckedCreateNestedManyWithoutSkillInputSchema } from './SkillsToTasksUncheckedCreateNestedManyWithoutSkillInputSchema';
import { PersonsToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema } from './PersonsToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema';
import { EnergiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema } from './EnergiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema';
import { PrivateEnergiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema } from './PrivateEnergiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema';
import { PrioritiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema } from './PrioritiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema';
import { SkillsToTagsUncheckedCreateNestedManyWithoutSkillInputSchema } from './SkillsToTagsUncheckedCreateNestedManyWithoutSkillInputSchema';

export const SkillUncheckedCreateWithoutPrecedesInputSchema: z.ZodType<Prisma.SkillUncheckedCreateWithoutPrecedesInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  paths: z.lazy(() => SkillsToSkillPathsUncheckedCreateNestedManyWithoutSkillInputSchema).optional(),
  succeeds: z.lazy(() => SkillLinkUncheckedCreateNestedManyWithoutSuccessorInputSchema).optional(),
  taskTemplates: z.lazy(() => SkillsToTaskTemplatesUncheckedCreateNestedManyWithoutSkillInputSchema).optional(),
  tasks: z.lazy(() => SkillsToTasksUncheckedCreateNestedManyWithoutSkillInputSchema).optional(),
  students: z.lazy(() => PersonsToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema).optional(),
  energies: z.lazy(() => EnergiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema).optional(),
  tags: z.lazy(() => SkillsToTagsUncheckedCreateNestedManyWithoutSkillInputSchema).optional()
}).strict();

export default SkillUncheckedCreateWithoutPrecedesInputSchema;
