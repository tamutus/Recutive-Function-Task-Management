import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { PersonsToProjectTemplatesListRelationFilterSchema } from './PersonsToProjectTemplatesListRelationFilterSchema';
import { EnergiesToProjectTemplatesListRelationFilterSchema } from './EnergiesToProjectTemplatesListRelationFilterSchema';
import { ProjectTemplatesToTagsListRelationFilterSchema } from './ProjectTemplatesToTagsListRelationFilterSchema';
import { PrivateEnergiesToProjectTemplatesListRelationFilterSchema } from './PrivateEnergiesToProjectTemplatesListRelationFilterSchema';
import { PrivateTagsToProjectTemplatesListRelationFilterSchema } from './PrivateTagsToProjectTemplatesListRelationFilterSchema';
import { ProjectTemplatesToTaskTemplatesListRelationFilterSchema } from './ProjectTemplatesToTaskTemplatesListRelationFilterSchema';
import { ProjectListRelationFilterSchema } from './ProjectListRelationFilterSchema';

export const ProjectTemplateWhereInputSchema: z.ZodType<Prisma.ProjectTemplateWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectTemplateWhereInputSchema),z.lazy(() => ProjectTemplateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectTemplateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectTemplateWhereInputSchema),z.lazy(() => ProjectTemplateWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  completionRequirements: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  links: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  collaborators: z.lazy(() => PersonsToProjectTemplatesListRelationFilterSchema).optional(),
  energies: z.lazy(() => EnergiesToProjectTemplatesListRelationFilterSchema).optional(),
  tags: z.lazy(() => ProjectTemplatesToTagsListRelationFilterSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToProjectTemplatesListRelationFilterSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToProjectTemplatesListRelationFilterSchema).optional(),
  tasks: z.lazy(() => ProjectTemplatesToTaskTemplatesListRelationFilterSchema).optional(),
  implementations: z.lazy(() => ProjectListRelationFilterSchema).optional()
}).strict();

export default ProjectTemplateWhereInputSchema;
