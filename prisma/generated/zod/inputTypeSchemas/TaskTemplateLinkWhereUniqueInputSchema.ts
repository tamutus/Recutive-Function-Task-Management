import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateLinkPrecursorIdSuccessorIdCompoundUniqueInputSchema } from './TaskTemplateLinkPrecursorIdSuccessorIdCompoundUniqueInputSchema';
import { TaskTemplateLinkWhereInputSchema } from './TaskTemplateLinkWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumLinkTypeFilterSchema } from './EnumLinkTypeFilterSchema';
import { LinkTypeSchema } from './LinkTypeSchema';
import { TaskTemplateRelationFilterSchema } from './TaskTemplateRelationFilterSchema';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';

export const TaskTemplateLinkWhereUniqueInputSchema: z.ZodType<Prisma.TaskTemplateLinkWhereUniqueInput> = z.object({
  precursorId_successorId: z.lazy(() => TaskTemplateLinkPrecursorIdSuccessorIdCompoundUniqueInputSchema)
})
.and(z.object({
  precursorId_successorId: z.lazy(() => TaskTemplateLinkPrecursorIdSuccessorIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TaskTemplateLinkWhereInputSchema),z.lazy(() => TaskTemplateLinkWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaskTemplateLinkWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaskTemplateLinkWhereInputSchema),z.lazy(() => TaskTemplateLinkWhereInputSchema).array() ]).optional(),
  precursorId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  successorId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  linkType: z.union([ z.lazy(() => EnumLinkTypeFilterSchema),z.lazy(() => LinkTypeSchema) ]).optional(),
  precursor: z.union([ z.lazy(() => TaskTemplateRelationFilterSchema),z.lazy(() => TaskTemplateWhereInputSchema) ]).optional(),
  successor: z.union([ z.lazy(() => TaskTemplateRelationFilterSchema),z.lazy(() => TaskTemplateWhereInputSchema) ]).optional(),
}).strict());

export default TaskTemplateLinkWhereUniqueInputSchema;
