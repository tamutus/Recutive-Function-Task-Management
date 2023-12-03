import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { ProjectTemplateRelationFilterSchema } from './ProjectTemplateRelationFilterSchema';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';

export const PersonsToProjectTemplatesWhereInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PersonsToProjectTemplatesWhereInputSchema),z.lazy(() => PersonsToProjectTemplatesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonsToProjectTemplatesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonsToProjectTemplatesWhereInputSchema),z.lazy(() => PersonsToProjectTemplatesWhereInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  person: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  project: z.union([ z.lazy(() => ProjectTemplateRelationFilterSchema),z.lazy(() => ProjectTemplateWhereInputSchema) ]).optional(),
}).strict();

export default PersonsToProjectTemplatesWhereInputSchema;
