import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { EnergiesToProjectTemplatesListRelationFilterSchema } from './EnergiesToProjectTemplatesListRelationFilterSchema';
import { EnergiesToTaskTemplatesListRelationFilterSchema } from './EnergiesToTaskTemplatesListRelationFilterSchema';
import { EnergiesToSkillsListRelationFilterSchema } from './EnergiesToSkillsListRelationFilterSchema';
import { EnergiesToTagsListRelationFilterSchema } from './EnergiesToTagsListRelationFilterSchema';
import { EnergiesToPersonsListRelationFilterSchema } from './EnergiesToPersonsListRelationFilterSchema';
import { EnergiesToProjectsListRelationFilterSchema } from './EnergiesToProjectsListRelationFilterSchema';
import { EnergiesToTasksListRelationFilterSchema } from './EnergiesToTasksListRelationFilterSchema';
import { EnergiesToTaskWorksListRelationFilterSchema } from './EnergiesToTaskWorksListRelationFilterSchema';
import { EnergiesToPrivateTagsListRelationFilterSchema } from './EnergiesToPrivateTagsListRelationFilterSchema';

export const EnergyWhereInputSchema: z.ZodType<Prisma.EnergyWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EnergyWhereInputSchema),z.lazy(() => EnergyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergyWhereInputSchema),z.lazy(() => EnergyWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  unit: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  music: z.lazy(() => StringNullableListFilterSchema).optional(),
  projectTemplates: z.lazy(() => EnergiesToProjectTemplatesListRelationFilterSchema).optional(),
  taskTemplates: z.lazy(() => EnergiesToTaskTemplatesListRelationFilterSchema).optional(),
  skills: z.lazy(() => EnergiesToSkillsListRelationFilterSchema).optional(),
  tags: z.lazy(() => EnergiesToTagsListRelationFilterSchema).optional(),
  experiences: z.lazy(() => EnergiesToPersonsListRelationFilterSchema).optional(),
  projects: z.lazy(() => EnergiesToProjectsListRelationFilterSchema).optional(),
  tasks: z.lazy(() => EnergiesToTasksListRelationFilterSchema).optional(),
  taskWork: z.lazy(() => EnergiesToTaskWorksListRelationFilterSchema).optional(),
  privateTags: z.lazy(() => EnergiesToPrivateTagsListRelationFilterSchema).optional()
}).strict();

export default EnergyWhereInputSchema;
