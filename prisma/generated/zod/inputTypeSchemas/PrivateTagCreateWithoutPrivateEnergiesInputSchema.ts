import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateNestedOneWithoutPrivateTagsInputSchema } from './PersonCreateNestedOneWithoutPrivateTagsInputSchema';
import { PrivateTagsToProjectTemplatesCreateNestedManyWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesCreateNestedManyWithoutPrivateTagInputSchema';
import { PrivateTagsToProjectsCreateNestedManyWithoutTagInputSchema } from './PrivateTagsToProjectsCreateNestedManyWithoutTagInputSchema';
import { PrivateTagsToTaskTemplatesCreateNestedManyWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesCreateNestedManyWithoutTagInputSchema';
import { PrivateTagsToTasksCreateNestedManyWithoutTagInputSchema } from './PrivateTagsToTasksCreateNestedManyWithoutTagInputSchema';
import { PrioritiesToPrivateTagsCreateNestedManyWithoutTagInputSchema } from './PrioritiesToPrivateTagsCreateNestedManyWithoutTagInputSchema';
import { EnergiesToPrivateTagsCreateNestedManyWithoutTagInputSchema } from './EnergiesToPrivateTagsCreateNestedManyWithoutTagInputSchema';

export const PrivateTagCreateWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.PrivateTagCreateWithoutPrivateEnergiesInput> = z.object({
  name: z.string(),
  info: z.string().optional().nullable(),
  nsfw: z.boolean(),
  color: z.string().optional().nullable(),
  person: z.lazy(() => PersonCreateNestedOneWithoutPrivateTagsInputSchema),
  projectTemplates: z.lazy(() => PrivateTagsToProjectTemplatesCreateNestedManyWithoutPrivateTagInputSchema).optional(),
  projects: z.lazy(() => PrivateTagsToProjectsCreateNestedManyWithoutTagInputSchema).optional(),
  taskTemplates: z.lazy(() => PrivateTagsToTaskTemplatesCreateNestedManyWithoutTagInputSchema).optional(),
  tasks: z.lazy(() => PrivateTagsToTasksCreateNestedManyWithoutTagInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToPrivateTagsCreateNestedManyWithoutTagInputSchema).optional(),
  energies: z.lazy(() => EnergiesToPrivateTagsCreateNestedManyWithoutTagInputSchema).optional()
}).strict();

export default PrivateTagCreateWithoutPrivateEnergiesInputSchema;