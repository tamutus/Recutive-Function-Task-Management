import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { ProjectTemplatesToTagsListRelationFilterSchema } from './ProjectTemplatesToTagsListRelationFilterSchema';
import { TagsToTaskTemplatesListRelationFilterSchema } from './TagsToTaskTemplatesListRelationFilterSchema';
import { PrioritiesToTagsListRelationFilterSchema } from './PrioritiesToTagsListRelationFilterSchema';
import { EnergiesToTagsListRelationFilterSchema } from './EnergiesToTagsListRelationFilterSchema';
import { PrivateEnergiesToTagsListRelationFilterSchema } from './PrivateEnergiesToTagsListRelationFilterSchema';
import { SkillsToTagsListRelationFilterSchema } from './SkillsToTagsListRelationFilterSchema';
import { SkillPathsToTagsListRelationFilterSchema } from './SkillPathsToTagsListRelationFilterSchema';
import { PersonsToTagsListRelationFilterSchema } from './PersonsToTagsListRelationFilterSchema';
import { ProjectsToTagsListRelationFilterSchema } from './ProjectsToTagsListRelationFilterSchema';
import { TagsToTasksListRelationFilterSchema } from './TagsToTasksListRelationFilterSchema';

export const TagWhereInputSchema: z.ZodType<Prisma.TagWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  nsfw: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectTemplates: z.lazy(() => ProjectTemplatesToTagsListRelationFilterSchema).optional(),
  taskTemplates: z.lazy(() => TagsToTaskTemplatesListRelationFilterSchema).optional(),
  priorities: z.lazy(() => PrioritiesToTagsListRelationFilterSchema).optional(),
  energies: z.lazy(() => EnergiesToTagsListRelationFilterSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToTagsListRelationFilterSchema).optional(),
  skills: z.lazy(() => SkillsToTagsListRelationFilterSchema).optional(),
  paths: z.lazy(() => SkillPathsToTagsListRelationFilterSchema).optional(),
  followers: z.lazy(() => PersonsToTagsListRelationFilterSchema).optional(),
  projects: z.lazy(() => ProjectsToTagsListRelationFilterSchema).optional(),
  tasks: z.lazy(() => TagsToTasksListRelationFilterSchema).optional()
}).strict();

export default TagWhereInputSchema;
