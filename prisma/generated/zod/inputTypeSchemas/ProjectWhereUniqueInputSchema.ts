import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ProjectTemplateNullableRelationFilterSchema } from './ProjectTemplateNullableRelationFilterSchema';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';
import { PersonsToProjectsListRelationFilterSchema } from './PersonsToProjectsListRelationFilterSchema';
import { ProjectsToTasksListRelationFilterSchema } from './ProjectsToTasksListRelationFilterSchema';
import { PrioritiesToProjectsListRelationFilterSchema } from './PrioritiesToProjectsListRelationFilterSchema';
import { EnergiesToProjectsListRelationFilterSchema } from './EnergiesToProjectsListRelationFilterSchema';
import { ProjectsToTagsListRelationFilterSchema } from './ProjectsToTagsListRelationFilterSchema';
import { PrivateEnergiesToProjectsListRelationFilterSchema } from './PrivateEnergiesToProjectsListRelationFilterSchema';
import { PrivateTagsToProjectsListRelationFilterSchema } from './PrivateTagsToProjectsListRelationFilterSchema';

export const ProjectWhereUniqueInputSchema: z.ZodType<Prisma.ProjectWhereUniqueInput> = z.object({
  id: z.number()
})
.and(z.object({
  id: z.number().optional(),
  AND: z.union([ z.lazy(() => ProjectWhereInputSchema),z.lazy(() => ProjectWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectWhereInputSchema),z.lazy(() => ProjectWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  completionRequirements: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  links: z.lazy(() => StringNullableListFilterSchema).optional(),
  templateId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  public: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  publicAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  startAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  startedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  dueAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  endedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  template: z.union([ z.lazy(() => ProjectTemplateNullableRelationFilterSchema),z.lazy(() => ProjectTemplateWhereInputSchema) ]).optional().nullable(),
  volunteers: z.lazy(() => PersonsToProjectsListRelationFilterSchema).optional(),
  tasks: z.lazy(() => ProjectsToTasksListRelationFilterSchema).optional(),
  priorities: z.lazy(() => PrioritiesToProjectsListRelationFilterSchema).optional(),
  energies: z.lazy(() => EnergiesToProjectsListRelationFilterSchema).optional(),
  tags: z.lazy(() => ProjectsToTagsListRelationFilterSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToProjectsListRelationFilterSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToProjectsListRelationFilterSchema).optional()
}).strict());

export default ProjectWhereUniqueInputSchema;
