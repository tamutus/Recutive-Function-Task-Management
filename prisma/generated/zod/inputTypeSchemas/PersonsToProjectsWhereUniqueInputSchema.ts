import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectsPersonIdProjectIdCompoundUniqueInputSchema } from './PersonsToProjectsPersonIdProjectIdCompoundUniqueInputSchema';
import { PersonsToProjectsWhereInputSchema } from './PersonsToProjectsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const PersonsToProjectsWhereUniqueInputSchema: z.ZodType<Prisma.PersonsToProjectsWhereUniqueInput> = z.object({
  personId_projectId: z.lazy(() => PersonsToProjectsPersonIdProjectIdCompoundUniqueInputSchema)
})
.and(z.object({
  personId_projectId: z.lazy(() => PersonsToProjectsPersonIdProjectIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PersonsToProjectsWhereInputSchema),z.lazy(() => PersonsToProjectsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonsToProjectsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonsToProjectsWhereInputSchema),z.lazy(() => PersonsToProjectsWhereInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  volunteerDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  person: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict());

export default PersonsToProjectsWhereUniqueInputSchema;
