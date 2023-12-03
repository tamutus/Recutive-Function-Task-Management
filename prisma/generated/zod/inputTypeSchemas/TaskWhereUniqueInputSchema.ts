import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TaskTemplateNullableRelationFilterSchema } from './TaskTemplateNullableRelationFilterSchema';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';
import { TaskLinkListRelationFilterSchema } from './TaskLinkListRelationFilterSchema';
import { ProjectsToTasksListRelationFilterSchema } from './ProjectsToTasksListRelationFilterSchema';
import { TaskWorkListRelationFilterSchema } from './TaskWorkListRelationFilterSchema';
import { SkillsToTasksListRelationFilterSchema } from './SkillsToTasksListRelationFilterSchema';
import { PrioritiesToTasksListRelationFilterSchema } from './PrioritiesToTasksListRelationFilterSchema';
import { TagsToTasksListRelationFilterSchema } from './TagsToTasksListRelationFilterSchema';
import { PrivateTagsToTasksListRelationFilterSchema } from './PrivateTagsToTasksListRelationFilterSchema';
import { EnergiesToTasksListRelationFilterSchema } from './EnergiesToTasksListRelationFilterSchema';
import { PrivateEnergiesToTasksListRelationFilterSchema } from './PrivateEnergiesToTasksListRelationFilterSchema';
import { PersonNullableRelationFilterSchema } from './PersonNullableRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const TaskWhereUniqueInputSchema: z.ZodType<Prisma.TaskWhereUniqueInput> = z.object({
  id: z.number()
})
.and(z.object({
  id: z.number().optional(),
  AND: z.union([ z.lazy(() => TaskWhereInputSchema),z.lazy(() => TaskWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaskWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaskWhereInputSchema),z.lazy(() => TaskWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  links: z.lazy(() => StringNullableListFilterSchema).optional(),
  templateId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  personId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  public: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  publicAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  startAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  startedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  dueAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  endedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  template: z.union([ z.lazy(() => TaskTemplateNullableRelationFilterSchema),z.lazy(() => TaskTemplateWhereInputSchema) ]).optional().nullable(),
  precursors: z.lazy(() => TaskLinkListRelationFilterSchema).optional(),
  successors: z.lazy(() => TaskLinkListRelationFilterSchema).optional(),
  projects: z.lazy(() => ProjectsToTasksListRelationFilterSchema).optional(),
  work: z.lazy(() => TaskWorkListRelationFilterSchema).optional(),
  skills: z.lazy(() => SkillsToTasksListRelationFilterSchema).optional(),
  priorities: z.lazy(() => PrioritiesToTasksListRelationFilterSchema).optional(),
  tags: z.lazy(() => TagsToTasksListRelationFilterSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToTasksListRelationFilterSchema).optional(),
  energies: z.lazy(() => EnergiesToTasksListRelationFilterSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToTasksListRelationFilterSchema).optional(),
  person: z.union([ z.lazy(() => PersonNullableRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional().nullable(),
}).strict());

export default TaskWhereUniqueInputSchema;
