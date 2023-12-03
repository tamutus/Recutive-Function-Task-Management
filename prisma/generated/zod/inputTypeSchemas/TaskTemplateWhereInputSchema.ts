import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ProjectTemplatesToTaskTemplatesListRelationFilterSchema } from './ProjectTemplatesToTaskTemplatesListRelationFilterSchema';
import { TaskTemplateLinkListRelationFilterSchema } from './TaskTemplateLinkListRelationFilterSchema';
import { SkillsToTaskTemplatesListRelationFilterSchema } from './SkillsToTaskTemplatesListRelationFilterSchema';
import { TagsToTaskTemplatesListRelationFilterSchema } from './TagsToTaskTemplatesListRelationFilterSchema';
import { PrivateTagsToTaskTemplatesListRelationFilterSchema } from './PrivateTagsToTaskTemplatesListRelationFilterSchema';
import { EnergiesToTaskTemplatesListRelationFilterSchema } from './EnergiesToTaskTemplatesListRelationFilterSchema';
import { PrivateEnergiesToTaskTemplatesListRelationFilterSchema } from './PrivateEnergiesToTaskTemplatesListRelationFilterSchema';
import { PersonsToTaskTemplatesListRelationFilterSchema } from './PersonsToTaskTemplatesListRelationFilterSchema';
import { TaskListRelationFilterSchema } from './TaskListRelationFilterSchema';

export const TaskTemplateWhereInputSchema: z.ZodType<Prisma.TaskTemplateWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TaskTemplateWhereInputSchema),z.lazy(() => TaskTemplateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaskTemplateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaskTemplateWhereInputSchema),z.lazy(() => TaskTemplateWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  completionRequirements: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  links: z.lazy(() => StringNullableListFilterSchema).optional(),
  schedule: z.lazy(() => JsonFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  projects: z.lazy(() => ProjectTemplatesToTaskTemplatesListRelationFilterSchema).optional(),
  precursors: z.lazy(() => TaskTemplateLinkListRelationFilterSchema).optional(),
  successors: z.lazy(() => TaskTemplateLinkListRelationFilterSchema).optional(),
  skills: z.lazy(() => SkillsToTaskTemplatesListRelationFilterSchema).optional(),
  tags: z.lazy(() => TagsToTaskTemplatesListRelationFilterSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToTaskTemplatesListRelationFilterSchema).optional(),
  energies: z.lazy(() => EnergiesToTaskTemplatesListRelationFilterSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToTaskTemplatesListRelationFilterSchema).optional(),
  collaborators: z.lazy(() => PersonsToTaskTemplatesListRelationFilterSchema).optional(),
  implementations: z.lazy(() => TaskListRelationFilterSchema).optional()
}).strict();

export default TaskTemplateWhereInputSchema;
