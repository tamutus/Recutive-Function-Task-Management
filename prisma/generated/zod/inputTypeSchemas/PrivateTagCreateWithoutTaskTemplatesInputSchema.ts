import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateNestedOneWithoutPrivateTagsInputSchema } from './PersonCreateNestedOneWithoutPrivateTagsInputSchema';
import { PrivateTagsToProjectTemplatesCreateNestedManyWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesCreateNestedManyWithoutPrivateTagInputSchema';
import { PrivateTagsToProjectsCreateNestedManyWithoutTagInputSchema } from './PrivateTagsToProjectsCreateNestedManyWithoutTagInputSchema';
import { PrivateTagsToTasksCreateNestedManyWithoutTagInputSchema } from './PrivateTagsToTasksCreateNestedManyWithoutTagInputSchema';
import { PrioritiesToPrivateTagsCreateNestedManyWithoutTagInputSchema } from './PrioritiesToPrivateTagsCreateNestedManyWithoutTagInputSchema';
import { EnergiesToPrivateTagsCreateNestedManyWithoutTagInputSchema } from './EnergiesToPrivateTagsCreateNestedManyWithoutTagInputSchema';
import { PrivateEnergiesToPrivateTagsCreateNestedManyWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsCreateNestedManyWithoutTagInputSchema';

export const PrivateTagCreateWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.PrivateTagCreateWithoutTaskTemplatesInput> = z.object({
  name: z.string(),
  info: z.string().optional().nullable(),
  nsfw: z.boolean(),
  color: z.string().optional().nullable(),
  person: z.lazy(() => PersonCreateNestedOneWithoutPrivateTagsInputSchema),
  projectTemplates: z.lazy(() => PrivateTagsToProjectTemplatesCreateNestedManyWithoutPrivateTagInputSchema).optional(),
  projects: z.lazy(() => PrivateTagsToProjectsCreateNestedManyWithoutTagInputSchema).optional(),
  tasks: z.lazy(() => PrivateTagsToTasksCreateNestedManyWithoutTagInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToPrivateTagsCreateNestedManyWithoutTagInputSchema).optional(),
  energies: z.lazy(() => EnergiesToPrivateTagsCreateNestedManyWithoutTagInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToPrivateTagsCreateNestedManyWithoutTagInputSchema).optional()
}).strict();

export default PrivateTagCreateWithoutTaskTemplatesInputSchema;
