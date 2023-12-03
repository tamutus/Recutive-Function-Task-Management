import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PrivateTagsToProjectTemplatesListRelationFilterSchema } from './PrivateTagsToProjectTemplatesListRelationFilterSchema';
import { PrivateTagsToProjectsListRelationFilterSchema } from './PrivateTagsToProjectsListRelationFilterSchema';
import { PrivateTagsToTaskTemplatesListRelationFilterSchema } from './PrivateTagsToTaskTemplatesListRelationFilterSchema';
import { PrivateTagsToTasksListRelationFilterSchema } from './PrivateTagsToTasksListRelationFilterSchema';
import { PrioritiesToPrivateTagsListRelationFilterSchema } from './PrioritiesToPrivateTagsListRelationFilterSchema';
import { EnergiesToPrivateTagsListRelationFilterSchema } from './EnergiesToPrivateTagsListRelationFilterSchema';
import { PrivateEnergiesToPrivateTagsListRelationFilterSchema } from './PrivateEnergiesToPrivateTagsListRelationFilterSchema';

export const PrivateTagWhereInputSchema: z.ZodType<Prisma.PrivateTagWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateTagWhereInputSchema),z.lazy(() => PrivateTagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateTagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateTagWhereInputSchema),z.lazy(() => PrivateTagWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  nsfw: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  person: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  projectTemplates: z.lazy(() => PrivateTagsToProjectTemplatesListRelationFilterSchema).optional(),
  projects: z.lazy(() => PrivateTagsToProjectsListRelationFilterSchema).optional(),
  taskTemplates: z.lazy(() => PrivateTagsToTaskTemplatesListRelationFilterSchema).optional(),
  tasks: z.lazy(() => PrivateTagsToTasksListRelationFilterSchema).optional(),
  priorities: z.lazy(() => PrioritiesToPrivateTagsListRelationFilterSchema).optional(),
  energies: z.lazy(() => EnergiesToPrivateTagsListRelationFilterSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToPrivateTagsListRelationFilterSchema).optional()
}).strict();

export default PrivateTagWhereInputSchema;
