import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PrivateEnergiesToProjectTemplatesListRelationFilterSchema } from './PrivateEnergiesToProjectTemplatesListRelationFilterSchema';
import { PrivateEnergiesToTaskTemplatesListRelationFilterSchema } from './PrivateEnergiesToTaskTemplatesListRelationFilterSchema';
import { PrivateEnergiesToSkillsListRelationFilterSchema } from './PrivateEnergiesToSkillsListRelationFilterSchema';
import { PrivateEnergiesToTagsListRelationFilterSchema } from './PrivateEnergiesToTagsListRelationFilterSchema';
import { PrivateEnergiesToProjectsListRelationFilterSchema } from './PrivateEnergiesToProjectsListRelationFilterSchema';
import { PrivateEnergiesToTasksListRelationFilterSchema } from './PrivateEnergiesToTasksListRelationFilterSchema';
import { PrivateEnergiesToTaskWorksListRelationFilterSchema } from './PrivateEnergiesToTaskWorksListRelationFilterSchema';
import { PrivateEnergiesToPrivateTagsListRelationFilterSchema } from './PrivateEnergiesToPrivateTagsListRelationFilterSchema';

export const PrivateEnergyWhereInputSchema: z.ZodType<Prisma.PrivateEnergyWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergyWhereInputSchema),z.lazy(() => PrivateEnergyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergyWhereInputSchema),z.lazy(() => PrivateEnergyWhereInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  unit: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  music: z.lazy(() => StringNullableListFilterSchema).optional(),
  person: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  projectTemplates: z.lazy(() => PrivateEnergiesToProjectTemplatesListRelationFilterSchema).optional(),
  taskTemplates: z.lazy(() => PrivateEnergiesToTaskTemplatesListRelationFilterSchema).optional(),
  skills: z.lazy(() => PrivateEnergiesToSkillsListRelationFilterSchema).optional(),
  tags: z.lazy(() => PrivateEnergiesToTagsListRelationFilterSchema).optional(),
  projects: z.lazy(() => PrivateEnergiesToProjectsListRelationFilterSchema).optional(),
  tasks: z.lazy(() => PrivateEnergiesToTasksListRelationFilterSchema).optional(),
  taskWork: z.lazy(() => PrivateEnergiesToTaskWorksListRelationFilterSchema).optional(),
  privateTags: z.lazy(() => PrivateEnergiesToPrivateTagsListRelationFilterSchema).optional()
}).strict();

export default PrivateEnergyWhereInputSchema;
