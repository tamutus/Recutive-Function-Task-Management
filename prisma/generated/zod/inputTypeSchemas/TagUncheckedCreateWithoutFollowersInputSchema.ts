import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTagsUncheckedCreateNestedManyWithoutTagInputSchema } from './ProjectTemplatesToTagsUncheckedCreateNestedManyWithoutTagInputSchema';
import { TagsToTaskTemplatesUncheckedCreateNestedManyWithoutTagInputSchema } from './TagsToTaskTemplatesUncheckedCreateNestedManyWithoutTagInputSchema';
import { PrioritiesToTagsUncheckedCreateNestedManyWithoutTagInputSchema } from './PrioritiesToTagsUncheckedCreateNestedManyWithoutTagInputSchema';
import { EnergiesToTagsUncheckedCreateNestedManyWithoutTagInputSchema } from './EnergiesToTagsUncheckedCreateNestedManyWithoutTagInputSchema';
import { PrivateEnergiesToTagsUncheckedCreateNestedManyWithoutTagInputSchema } from './PrivateEnergiesToTagsUncheckedCreateNestedManyWithoutTagInputSchema';
import { SkillsToTagsUncheckedCreateNestedManyWithoutTagInputSchema } from './SkillsToTagsUncheckedCreateNestedManyWithoutTagInputSchema';
import { SkillPathsToTagsUncheckedCreateNestedManyWithoutTagInputSchema } from './SkillPathsToTagsUncheckedCreateNestedManyWithoutTagInputSchema';
import { ProjectsToTagsUncheckedCreateNestedManyWithoutTagInputSchema } from './ProjectsToTagsUncheckedCreateNestedManyWithoutTagInputSchema';
import { TagsToTasksUncheckedCreateNestedManyWithoutTagInputSchema } from './TagsToTasksUncheckedCreateNestedManyWithoutTagInputSchema';

export const TagUncheckedCreateWithoutFollowersInputSchema: z.ZodType<Prisma.TagUncheckedCreateWithoutFollowersInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  nsfw: z.boolean().optional(),
  color: z.string().optional().nullable(),
  projectTemplates: z.lazy(() => ProjectTemplatesToTagsUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  taskTemplates: z.lazy(() => TagsToTaskTemplatesUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToTagsUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  energies: z.lazy(() => EnergiesToTagsUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToTagsUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  skills: z.lazy(() => SkillsToTagsUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  paths: z.lazy(() => SkillPathsToTagsUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  projects: z.lazy(() => ProjectsToTagsUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
  tasks: z.lazy(() => TagsToTasksUncheckedCreateNestedManyWithoutTagInputSchema).optional()
}).strict();

export default TagUncheckedCreateWithoutFollowersInputSchema;
