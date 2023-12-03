import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectTemplatesUncheckedCreateNestedManyWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesUncheckedCreateNestedManyWithoutPrivateTagInputSchema';
import { PrivateTagsToProjectsUncheckedCreateNestedManyWithoutTagInputSchema } from './PrivateTagsToProjectsUncheckedCreateNestedManyWithoutTagInputSchema';
import { PrivateTagsToTaskTemplatesUncheckedCreateNestedManyWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesUncheckedCreateNestedManyWithoutTagInputSchema';
import { PrivateTagsToTasksUncheckedCreateNestedManyWithoutTagInputSchema } from './PrivateTagsToTasksUncheckedCreateNestedManyWithoutTagInputSchema';
import { EnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema } from './EnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema';
import { PrivateEnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema';

export const PrivateTagUncheckedCreateWithoutPrioritiesInputSchema: z.ZodType<Prisma.PrivateTagUncheckedCreateWithoutPrioritiesInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  nsfw: z.boolean(),
  color: z.string().optional().nullable(),
  personId: z.number().int(),
  projectTemplates: z.lazy(() => PrivateTagsToProjectTemplatesUncheckedCreateNestedManyWithoutPrivateTagInputSchema).optional(),
  projects: z.lazy(() => PrivateTagsToProjectsUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  taskTemplates: z.lazy(() => PrivateTagsToTaskTemplatesUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  tasks: z.lazy(() => PrivateTagsToTasksUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  energies: z.lazy(() => EnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema).optional()
}).strict();

export default PrivateTagUncheckedCreateWithoutPrioritiesInputSchema;
