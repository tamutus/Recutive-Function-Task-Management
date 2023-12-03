import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectsUncheckedCreateNestedManyWithoutTagInputSchema } from './PrivateTagsToProjectsUncheckedCreateNestedManyWithoutTagInputSchema';
import { PrivateTagsToTaskTemplatesUncheckedCreateNestedManyWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesUncheckedCreateNestedManyWithoutTagInputSchema';
import { PrivateTagsToTasksUncheckedCreateNestedManyWithoutTagInputSchema } from './PrivateTagsToTasksUncheckedCreateNestedManyWithoutTagInputSchema';
import { PrioritiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema } from './PrioritiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema';
import { EnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema } from './EnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema';
import { PrivateEnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema';

export const PrivateTagUncheckedCreateWithoutProjectTemplatesInputSchema: z.ZodType<Prisma.PrivateTagUncheckedCreateWithoutProjectTemplatesInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  nsfw: z.boolean(),
  color: z.string().optional().nullable(),
  personId: z.number().int(),
  projects: z.lazy(() => PrivateTagsToProjectsUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  taskTemplates: z.lazy(() => PrivateTagsToTaskTemplatesUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  tasks: z.lazy(() => PrivateTagsToTasksUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  energies: z.lazy(() => EnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema).optional()
}).strict();

export default PrivateTagUncheckedCreateWithoutProjectTemplatesInputSchema;
