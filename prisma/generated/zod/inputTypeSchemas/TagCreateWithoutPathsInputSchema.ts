import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsCreateNestedManyWithoutTagInputSchema } from './ProjectTemplatesToTagsCreateNestedManyWithoutTagInputSchema';
import { TagsToTaskTemplatesCreateNestedManyWithoutTagInputSchema } from './TagsToTaskTemplatesCreateNestedManyWithoutTagInputSchema';
import { PrioritiesToTagsCreateNestedManyWithoutTagInputSchema } from './PrioritiesToTagsCreateNestedManyWithoutTagInputSchema';
import { EnergiesToTagsCreateNestedManyWithoutTagInputSchema } from './EnergiesToTagsCreateNestedManyWithoutTagInputSchema';
import { PrivateEnergiesToTagsCreateNestedManyWithoutTagInputSchema } from './PrivateEnergiesToTagsCreateNestedManyWithoutTagInputSchema';
import { SkillsToTagsCreateNestedManyWithoutTagInputSchema } from './SkillsToTagsCreateNestedManyWithoutTagInputSchema';
import { PersonsToTagsCreateNestedManyWithoutTagInputSchema } from './PersonsToTagsCreateNestedManyWithoutTagInputSchema';
import { ProjectsToTagsCreateNestedManyWithoutTagInputSchema } from './ProjectsToTagsCreateNestedManyWithoutTagInputSchema';
import { TagsToTasksCreateNestedManyWithoutTagInputSchema } from './TagsToTasksCreateNestedManyWithoutTagInputSchema';

export const TagCreateWithoutPathsInputSchema: z.ZodType<Prisma.TagCreateWithoutPathsInput> = z.object({
  name: z.string(),
  info: z.string().optional().nullable(),
  nsfw: z.boolean().optional(),
  color: z.string().optional().nullable(),
  projectTemplates: z.lazy(() => ProjectTemplatesToTagsCreateNestedManyWithoutTagInputSchema).optional(),
  taskTemplates: z.lazy(() => TagsToTaskTemplatesCreateNestedManyWithoutTagInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToTagsCreateNestedManyWithoutTagInputSchema).optional(),
  energies: z.lazy(() => EnergiesToTagsCreateNestedManyWithoutTagInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToTagsCreateNestedManyWithoutTagInputSchema).optional(),
  skills: z.lazy(() => SkillsToTagsCreateNestedManyWithoutTagInputSchema).optional(),
  followers: z.lazy(() => PersonsToTagsCreateNestedManyWithoutTagInputSchema).optional(),
  projects: z.lazy(() => ProjectsToTagsCreateNestedManyWithoutTagInputSchema).optional(),
  tasks: z.lazy(() => TagsToTasksCreateNestedManyWithoutTagInputSchema).optional()
}).strict();

export default TagCreateWithoutPathsInputSchema;
