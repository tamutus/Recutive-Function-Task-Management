import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectTemplatesUncheckedCreateNestedManyWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesUncheckedCreateNestedManyWithoutPrivateTagInputSchema';
import { PrivateTagsToTaskTemplatesUncheckedCreateNestedManyWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesUncheckedCreateNestedManyWithoutTagInputSchema';
import { PrivateTagsToTasksUncheckedCreateNestedManyWithoutTagInputSchema } from './PrivateTagsToTasksUncheckedCreateNestedManyWithoutTagInputSchema';
import { PrioritiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema } from './PrioritiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema';
import { EnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema } from './EnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema';
import { PrivateEnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema';

export const PrivateTagUncheckedCreateWithoutProjectsInputSchema: z.ZodType<Prisma.PrivateTagUncheckedCreateWithoutProjectsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  nsfw: z.boolean(),
  color: z.string().optional().nullable(),
  personId: z.number().int(),
  projectTemplates: z.lazy(() => PrivateTagsToProjectTemplatesUncheckedCreateNestedManyWithoutPrivateTagInputSchema).optional(),
  taskTemplates: z.lazy(() => PrivateTagsToTaskTemplatesUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  tasks: z.lazy(() => PrivateTagsToTasksUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  energies: z.lazy(() => EnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema).optional()
}).strict();

export default PrivateTagUncheckedCreateWithoutProjectsInputSchema;
