import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';
import { EnumLinkTypeFieldUpdateOperationsInputSchema } from './EnumLinkTypeFieldUpdateOperationsInputSchema';
import { TaskTemplateUpdateOneRequiredWithoutSuccessorsNestedInputSchema } from './TaskTemplateUpdateOneRequiredWithoutSuccessorsNestedInputSchema';

export const TaskTemplateLinkUpdateWithoutPrecursorInputSchema: z.ZodType<Prisma.TaskTemplateLinkUpdateWithoutPrecursorInput> = z.object({
  linkType: z.union([ z.lazy(() => LinkTypeSchema),z.lazy(() => EnumLinkTypeFieldUpdateOperationsInputSchema) ]).optional(),
  successor: z.lazy(() => TaskTemplateUpdateOneRequiredWithoutSuccessorsNestedInputSchema).optional()
}).strict();

export default TaskTemplateLinkUpdateWithoutPrecursorInputSchema;
