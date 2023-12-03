import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTaskTemplatesPersonIdTaskIdCompoundUniqueInputSchema } from './PersonsToTaskTemplatesPersonIdTaskIdCompoundUniqueInputSchema';
import { PersonsToTaskTemplatesWhereInputSchema } from './PersonsToTaskTemplatesWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { TaskTemplateRelationFilterSchema } from './TaskTemplateRelationFilterSchema';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';

export const PersonsToTaskTemplatesWhereUniqueInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesWhereUniqueInput> = z.object({
  personId_taskId: z.lazy(() => PersonsToTaskTemplatesPersonIdTaskIdCompoundUniqueInputSchema)
})
.and(z.object({
  personId_taskId: z.lazy(() => PersonsToTaskTemplatesPersonIdTaskIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PersonsToTaskTemplatesWhereInputSchema),z.lazy(() => PersonsToTaskTemplatesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonsToTaskTemplatesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonsToTaskTemplatesWhereInputSchema),z.lazy(() => PersonsToTaskTemplatesWhereInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  person: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  task: z.union([ z.lazy(() => TaskTemplateRelationFilterSchema),z.lazy(() => TaskTemplateWhereInputSchema) ]).optional(),
}).strict());

export default PersonsToTaskTemplatesWhereUniqueInputSchema;
