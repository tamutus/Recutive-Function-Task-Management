import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';
import { EnumLinkTypeFieldUpdateOperationsInputSchema } from './EnumLinkTypeFieldUpdateOperationsInputSchema';
import { TaskUpdateOneRequiredWithoutSuccessorsNestedInputSchema } from './TaskUpdateOneRequiredWithoutSuccessorsNestedInputSchema';

export const TaskLinkUpdateWithoutPrecursorInputSchema: z.ZodType<Prisma.TaskLinkUpdateWithoutPrecursorInput> = z.object({
  linkType: z.union([ z.lazy(() => LinkTypeSchema),z.lazy(() => EnumLinkTypeFieldUpdateOperationsInputSchema) ]).optional(),
  successor: z.lazy(() => TaskUpdateOneRequiredWithoutSuccessorsNestedInputSchema).optional()
}).strict();

export default TaskLinkUpdateWithoutPrecursorInputSchema;
