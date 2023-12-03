import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';
import { EnumLinkTypeFieldUpdateOperationsInputSchema } from './EnumLinkTypeFieldUpdateOperationsInputSchema';
import { TaskTemplateUpdateOneRequiredWithoutPrecursorsNestedInputSchema } from './TaskTemplateUpdateOneRequiredWithoutPrecursorsNestedInputSchema';
import { TaskTemplateUpdateOneRequiredWithoutSuccessorsNestedInputSchema } from './TaskTemplateUpdateOneRequiredWithoutSuccessorsNestedInputSchema';

export const TaskTemplateLinkUpdateInputSchema: z.ZodType<Prisma.TaskTemplateLinkUpdateInput> = z.object({
  linkType: z.union([ z.lazy(() => LinkTypeSchema),z.lazy(() => EnumLinkTypeFieldUpdateOperationsInputSchema) ]).optional(),
  precursor: z.lazy(() => TaskTemplateUpdateOneRequiredWithoutPrecursorsNestedInputSchema).optional(),
  successor: z.lazy(() => TaskTemplateUpdateOneRequiredWithoutSuccessorsNestedInputSchema).optional()
}).strict();

export default TaskTemplateLinkUpdateInputSchema;
